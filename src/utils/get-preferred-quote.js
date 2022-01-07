/**
 * @typedef {SINGLE_QUOTE | DOUBLE_QUOTE} Quote
 */

const SINGLE_QUOTE = "'";
const DOUBLE_QUOTE = '"';

/**
 *
 * @param {string} rawContent
 * @param {Quote | boolean} preferredQuoteOrPreferSingleQuote
 * @returns {Quote}
 */
function getPreferredQuote(rawContent, preferredQuoteOrPreferSingleQuote) {
  const preferred =
    preferredQuoteOrPreferSingleQuote === true ||
    preferredQuoteOrPreferSingleQuote === SINGLE_QUOTE
      ? SINGLE_QUOTE
      : DOUBLE_QUOTE;
  const alternate = preferred === SINGLE_QUOTE ? DOUBLE_QUOTE : SINGLE_QUOTE;

  let preferredQuoteCount = 0;
  let alternateQuoteCount = 0;
  for (const character of rawContent) {
    if (character === preferred) {
      preferredQuoteCount++;
    } else if (character === alternate) {
      alternateQuoteCount++;
    }
  }

  return preferredQuoteCount > alternateQuoteCount ? alternate : preferred;
}

// // CP from "../common/util.js"
// function getPreferredQuote(rawContent, preferredQuote) {
//   /** @type {{ quote: '"', regex: RegExp, escaped: "&quot;" }} */
//   const double = { quote: '"', regex: /"/g, escaped: "&quot;" };
//   /** @type {{ quote: "'", regex: RegExp, escaped: "&apos;" }} */
//   const single = { quote: "'", regex: /'/g, escaped: "&apos;" };

//   return preferredQuote === "'" ? single : double;
//   // const alternate = preferred === single ? double : single;
//   // let result = preferred;

//   // If `rawContent` contains at least one of the quote preferred for enclosing
//   // the string, we might want to enclose with the alternate quote instead, to
//   // minimize the number of escaped quotes.
//   // if (
//   //   rawContent.includes(preferred.quote) ||
//   //   rawContent.includes(alternate.quote)
//   // ) {
//   //   const numPreferredQuotes = (rawContent.match(preferred.regex) || []).length;
//   //   const numAlternateQuotes = (rawContent.match(alternate.regex) || []).length;

//   //   result = numPreferredQuotes > numAlternateQuotes ? alternate : preferred;
//   // }

//   // return result;
// }

export default getPreferredQuote;
