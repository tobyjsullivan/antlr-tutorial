// Generated from grammar/CSV.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CSVListener } from "./CSVListener";
import { CSVVisitor } from "./CSVVisitor";


export class CSVParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly INT = 4;
	public static readonly STRING = 5;
	public static readonly WS = 6;
	public static readonly RULE_file = 0;
	public static readonly RULE_record = 1;
	public static readonly RULE_field = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "record", "field",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'\r'", "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "INT", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CSVParser._LITERAL_NAMES, CSVParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CSVParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CSV.g4"; }

	// @Override
	public get ruleNames(): string[] { return CSVParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CSVParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CSVParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CSVParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 6;
				this.record();
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CSVParser.INT || _la === CSVParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public record(): RecordContext {
		let _localctx: RecordContext = new RecordContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CSVParser.RULE_record);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this.field();
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSVParser.T__0) {
				{
				{
				this.state = 12;
				this.match(CSVParser.T__0);
				this.state = 13;
				this.field();
				}
				}
				this.state = 18;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSVParser.T__1) {
				{
				this.state = 19;
				this.match(CSVParser.T__1);
				}
			}

			this.state = 22;
			this.match(CSVParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CSVParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			_la = this._input.LA(1);
			if (!(_la === CSVParser.INT || _la === CSVParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b\x1D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02" +
		"\v\x03\x03\x03\x03\x03\x03\x07\x03\x11\n\x03\f\x03\x0E\x03\x14\v\x03\x03" +
		"\x03\x05\x03\x17\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x02\x02" +
		"\x02\x05\x02\x02\x04\x02\x06\x02\x02\x03\x03\x02\x06\x07\x02\x1C\x02\t" +
		"\x03\x02\x02\x02\x04\r\x03\x02\x02\x02\x06\x1A\x03\x02\x02\x02\b\n\x05" +
		"\x04\x03\x02\t\b\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v\t\x03\x02\x02\x02" +
		"\v\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x12\x05\x06\x04\x02\x0E\x0F" +
		"\x07\x03\x02\x02\x0F\x11\x05\x06\x04\x02\x10\x0E\x03\x02\x02\x02\x11\x14" +
		"\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x16" +
		"\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x17\x07\x04\x02\x02\x16\x15" +
		"\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19" +
		"\x07\x05\x02\x02\x19\x05\x03\x02\x02\x02\x1A\x1B\t\x02\x02\x02\x1B\x07" +
		"\x03\x02\x02\x02\x05\v\x12\x16";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSVParser.__ATN) {
			CSVParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CSVParser._serializedATN));
		}

		return CSVParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public record(): RecordContext[];
	public record(i: number): RecordContext;
	public record(i?: number): RecordContext | RecordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordContext);
		} else {
			return this.getRuleContext(i, RecordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSVParser.RULE_file; }
	// @Override
	public enterRule(listener: CSVListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: CSVListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSVVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSVParser.RULE_record; }
	// @Override
	public enterRule(listener: CSVListener): void {
		if (listener.enterRecord) {
			listener.enterRecord(this);
		}
	}
	// @Override
	public exitRule(listener: CSVListener): void {
		if (listener.exitRecord) {
			listener.exitRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSVVisitor<Result>): Result {
		if (visitor.visitRecord) {
			return visitor.visitRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(CSVParser.INT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CSVParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSVParser.RULE_field; }
	// @Override
	public enterRule(listener: CSVListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: CSVListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSVVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


