import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

import { CSVLexer } from "./csv/grammar/CSVLexer";
import {
  CSVParser,
  FieldContext,
  FileContext,
  RecordContext,
} from "./csv/grammar/CSVParser";
import { CSVListener } from "./csv/grammar/CSVListener";

const STRING_REGEX = /^"(.*)"$/;

const input = `"Date", "Order Number", "Unit Price", "Quantity", "Total"
"2021-12-31", 210823, 14, 10, 140
"2022-01-13", 283422, 1, 123, 123
"2022-03-02", 390248, 4, 444, 1234
`;

// Create the lexer and parser
const inputStream = CharStreams.fromString(input);
const lexer = new CSVLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new CSVParser(tokenStream);

// Parse the input
const tree = parser.file();

function trimString(s: string | undefined) {
  if (s === undefined) {
    return undefined;
  }

  const arr = STRING_REGEX.exec(s);
  return arr ? arr[1] : s;
}

// Define a Listener
class LoggingListener implements CSVListener {
  private recordNum = 0;
  private fieldNum = 0;
  private propNames: (string | number)[] = [];
  private results: object[] = [];
  private currentObj?: Record<string | number, string | number | undefined> =
    undefined;

  get inHeaderRow() {
    return this.recordNum === 1;
  }

  enterFile(ctx: FileContext) {
    console.log(`FILE ENTER`);
  }

  exitFile(ctx: FileContext) {
    console.log(`FILE EXIT`);

    console.log(JSON.stringify(this.results, undefined, 2));
  }

  enterRecord(ctx: RecordContext) {
    const recordNum = this.recordNum++;
    this.fieldNum = 0;

    if (!this.inHeaderRow) {
      this.currentObj = {};
    }

    console.log("RECORD: ", recordNum);
  }

  exitRecord(ctx: RecordContext) {
    if (!this.inHeaderRow) {
      if (!this.currentObj) {
        throw new Error(`currentObj is not defined: ${this.currentObj}`);
      }

      this.results.push(this.currentObj);
    }

    console.log("RECORD EXIT");
  }

  enterField(ctx: FieldContext) {
    const fieldNum = this.fieldNum++;

    const i = ctx.INT()?.text;
    const s = ctx.STRING()?.text;

    if (i !== undefined) {
      console.log(`FIELD (INT): ${i}`);
    } else if (s !== undefined) {
      console.log(`FIELD (STRING): ${s}`);
    } else {
      console.log(`FIELD (unknown): ${ctx.text}`);
    }

    const value = i !== undefined ? parseInt(i) : trimString(s);

    if (this.inHeaderRow) {
      if (value === undefined) {
        throw new Error(`value is not defined: ${value}`);
      }

      this.propNames[fieldNum - 1] = value;
    } else {
      const propName = this.propNames[fieldNum - 1];

      if (!this.currentObj) {
        throw new Error(`currentObj is not defined: ${this.currentObj}`);
      }

      this.currentObj[propName] = value;
    }
  }

  exitField(ctx: FieldContext) {
    console.log(`FIELD EXIT`);
  }
}

// Create the listener
const listener: CSVListener = new LoggingListener();

// Walk the tree
ParseTreeWalker.DEFAULT.walk(listener, tree);
