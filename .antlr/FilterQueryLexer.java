// Generated from /Users/marekchmiel/repos/public/object-filtering/FilterQuery.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FilterQueryLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LPAR=1, RPAR=2, COMMA=3, OR=4, AND=5, NOT=6, EQ=7, NE=8, GT=9, GE=10, 
		LT=11, LE=12, APPROX=13, ATTRIBUTE_NAME=14, NUMBER=15, STRING=16, TRUE=17, 
		FALSE=18, SPACE=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LPAR", "RPAR", "COMMA", "OR", "AND", "NOT", "EQ", "NE", "GT", "GE", 
			"LT", "LE", "APPROX", "ATTRIBUTE_NAME", "NUMBER", "STRING_CONTENT", "STRING", 
			"TRUE", "FALSE", "SPACE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "','", "'or'", "'and'", "'not'", "'='", "'!='", "'>'", 
			"'>='", "'<'", "'<='", "'~='", null, null, null, "'true'", "'false'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LPAR", "RPAR", "COMMA", "OR", "AND", "NOT", "EQ", "NE", "GT", 
			"GE", "LT", "LE", "APPROX", "ATTRIBUTE_NAME", "NUMBER", "STRING", "TRUE", 
			"FALSE", "SPACE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public FilterQueryLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "FilterQuery.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\25\u008e\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3"+
		"\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\13\3"+
		"\13\3\13\3\f\3\f\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\7\17Q\n\17\f\17"+
		"\16\17T\13\17\3\20\5\20W\n\20\3\20\6\20Z\n\20\r\20\16\20[\3\20\5\20_\n"+
		"\20\3\20\7\20b\n\20\f\20\16\20e\13\20\3\20\3\20\6\20i\n\20\r\20\16\20"+
		"j\5\20m\n\20\3\21\3\21\3\21\3\21\3\21\7\21t\n\21\f\21\16\21w\13\21\3\22"+
		"\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\25\6\25\u0089\n\25\r\25\16\25\u008a\3\25\3\25\2\2\26\3\3\5\4\7\5\t"+
		"\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\2#\22%"+
		"\23\'\24)\25\3\2\b\5\2C\\aac|\7\2\60\60\62;C\\aac|\4\2--//\3\2\62;\6\2"+
		"\f\f\16\17$$^^\4\2\13\13\"\"\2\u0097\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2"+
		"\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23"+
		"\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2"+
		"\2\2\2\37\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\3+\3\2"+
		"\2\2\5-\3\2\2\2\7/\3\2\2\2\t\61\3\2\2\2\13\64\3\2\2\2\r8\3\2\2\2\17<\3"+
		"\2\2\2\21>\3\2\2\2\23A\3\2\2\2\25C\3\2\2\2\27F\3\2\2\2\31H\3\2\2\2\33"+
		"K\3\2\2\2\35N\3\2\2\2\37l\3\2\2\2!u\3\2\2\2#x\3\2\2\2%|\3\2\2\2\'\u0081"+
		"\3\2\2\2)\u0088\3\2\2\2+,\7*\2\2,\4\3\2\2\2-.\7+\2\2.\6\3\2\2\2/\60\7"+
		".\2\2\60\b\3\2\2\2\61\62\7q\2\2\62\63\7t\2\2\63\n\3\2\2\2\64\65\7c\2\2"+
		"\65\66\7p\2\2\66\67\7f\2\2\67\f\3\2\2\289\7p\2\29:\7q\2\2:;\7v\2\2;\16"+
		"\3\2\2\2<=\7?\2\2=\20\3\2\2\2>?\7#\2\2?@\7?\2\2@\22\3\2\2\2AB\7@\2\2B"+
		"\24\3\2\2\2CD\7@\2\2DE\7?\2\2E\26\3\2\2\2FG\7>\2\2G\30\3\2\2\2HI\7>\2"+
		"\2IJ\7?\2\2J\32\3\2\2\2KL\7\u0080\2\2LM\7?\2\2M\34\3\2\2\2NR\t\2\2\2O"+
		"Q\t\3\2\2PO\3\2\2\2QT\3\2\2\2RP\3\2\2\2RS\3\2\2\2S\36\3\2\2\2TR\3\2\2"+
		"\2UW\t\4\2\2VU\3\2\2\2VW\3\2\2\2WY\3\2\2\2XZ\t\5\2\2YX\3\2\2\2Z[\3\2\2"+
		"\2[Y\3\2\2\2[\\\3\2\2\2\\m\3\2\2\2]_\t\4\2\2^]\3\2\2\2^_\3\2\2\2_c\3\2"+
		"\2\2`b\t\5\2\2a`\3\2\2\2be\3\2\2\2ca\3\2\2\2cd\3\2\2\2df\3\2\2\2ec\3\2"+
		"\2\2fh\7\60\2\2gi\t\5\2\2hg\3\2\2\2ij\3\2\2\2jh\3\2\2\2jk\3\2\2\2km\3"+
		"\2\2\2lV\3\2\2\2l^\3\2\2\2m \3\2\2\2nt\n\6\2\2op\7^\2\2pt\7$\2\2qr\7^"+
		"\2\2rt\7^\2\2sn\3\2\2\2so\3\2\2\2sq\3\2\2\2tw\3\2\2\2us\3\2\2\2uv\3\2"+
		"\2\2v\"\3\2\2\2wu\3\2\2\2xy\7$\2\2yz\5!\21\2z{\7$\2\2{$\3\2\2\2|}\7v\2"+
		"\2}~\7t\2\2~\177\7w\2\2\177\u0080\7g\2\2\u0080&\3\2\2\2\u0081\u0082\7"+
		"h\2\2\u0082\u0083\7c\2\2\u0083\u0084\7n\2\2\u0084\u0085\7u\2\2\u0085\u0086"+
		"\7g\2\2\u0086(\3\2\2\2\u0087\u0089\t\7\2\2\u0088\u0087\3\2\2\2\u0089\u008a"+
		"\3\2\2\2\u008a\u0088\3\2\2\2\u008a\u008b\3\2\2\2\u008b\u008c\3\2\2\2\u008c"+
		"\u008d\b\25\2\2\u008d*\3\2\2\2\r\2RV[^cjlsu\u008a\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}