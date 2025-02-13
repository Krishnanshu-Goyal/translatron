import React, { useState } from 'react';
import Select from 'react-select';
import Toconvert from './Toconvert';
import Format from './Format';

function Convert() {
  const [selectedSourceLanguage, setSelectedSourceLanguage] = useState(null);
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);

  const handleSourceLanguageChange = (option) => {
    setSelectedSourceLanguage(option);
  };

  const handleTargetLanguageChange = (option) => {
    setSelectedTargetLanguage(option);
  };

  const handleModeChange = (option) => {
    setSelectedMode(option);
  };

  const modeOptions = [
    { value: 'textconvert', label: 'Text Converter' },
    { value: 'pdfconvert', label: 'PDF Converter' },
    { value: 'documentformat', label: 'Document formator' },
  ];

  const languageOptions = [
    { value: 'af', label: 'Afrikaans' },
    { value: 'sq', label: 'Albanian' },
    { value: 'am', label: 'Amharic' },
    { value: 'ar', label: 'Arabic' },
    { value: 'hy', label: 'Armenian' },
    { value: 'as', label: 'Assamese' },
    { value: 'ay', label: 'Aymara' },
    { value: 'az', label: 'Azerbaijani' },
    { value: 'bm', label: 'Bambara' },
    { value: 'eu', label: 'Basque' },
    { value: 'be', label: 'Belarusian' },
    { value: 'bn', label: 'Bengali' },
    { value: 'bho', label: 'Bhojpuri' },
    { value: 'bs', label: 'Bosnian' },
    { value: 'bg', label: 'Bulgarian' },
    { value: 'ca', label: 'Catalan' },
    { value: 'ceb', label: 'Cebuano' },
    { value: 'zh-CN', label: 'Chinese (Simplified)' },
    { value: 'zh-TW', label: 'Chinese (Traditional)' },
    { value: 'co', label: 'Corsican' },
    { value: 'hr', label: 'Croatian' },
    { value: 'cs', label: 'Czech' },
    { value: 'da', label: 'Danish' },
    { value: 'dv', label: 'Dhivehi' },
    { value: 'doi', label: 'Dogri' },
    { value: 'nl', label: 'Dutch' },
    { value: 'en', label: 'English' },
    { value: 'eo', label: 'Esperanto' },
    { value: 'et', label: 'Estonian' },
    { value: 'ee', label: 'Ewe' },
    { value: 'fil', label: 'Filipino (Tagalog)' },
    { value: 'fi', label: 'Finnish' },
    { value: 'fr', label: 'French' },
    { value: 'fy', label: 'Frisian' },
    { value: 'gl', label: 'Galician' },
    { value: 'ka', label: 'Georgian' },
    { value: 'de', label: 'German' },
    { value: 'el', label: 'Greek' },
    { value: 'gn', label: 'Guarani' },
    { value: 'gu', label: 'Gujarati' },
    { value: 'ht', label: 'Haitian Creole' },
    { value: 'ha', label: 'Hausa' },
    { value: 'haw', label: 'Hawaiian' },
    { value: 'he', label: 'Hebrew' },
    { value: 'hi', label: 'Hindi' },
    { value: 'hmn', label: 'Hmong' },
    { value: 'hu', label: 'Hungarian' },
    { value: 'is', label: 'Icelandic' },
    { value: 'ig', label: 'Igbo' },
    { value: 'ilo', label: 'Ilocano' },
    { value: 'id', label: 'Indonesian' },
    { value: 'ga', label: 'Irish' },
    { value: 'it', label: 'Italian' },
    { value: 'ja', label: 'Japanese' },
    { value: 'jv', label: 'Javanese' },
    { value: 'kn', label: 'Kannada' },
    { value: 'kk', label: 'Kazakh' },
    { value: 'km', label: 'Khmer' },
    { value: 'rw', label: 'Kinyarwanda' },
    { value: 'gom', label: 'Konkani' },
    { value: 'ko', label: 'Korean' },
    { value: 'kri', label: 'Krio' },
    { value: 'ku', label: 'Kurdish' },
    { value: 'ckb', label: 'Kurdish (Sorani)' },
    { value: 'ky', label: 'Kyrgyz' },
    { value: 'lo', label: 'Lao' },
    { value: 'la', label: 'Latin' },
    { value: 'lv', label: 'Latvian' },
    { value: 'ln', label: 'Lingala' },
    { value: 'lt', label: 'Lithuanian' },
    { value: 'lg', label: 'Luganda' },
    { value: 'lb', label: 'Luxembourgish' },
    { value: 'mk', label: 'Macedonian' },
    { value: 'mai', label: 'Maithili' },
    { value: 'mg', label: 'Malagasy' },
    { value: 'ms', label: 'Malay' },
    { value: 'ml', label: 'Malayalam' },
    { value: 'mt', label: 'Maltese' },
    { value: 'mi', label: 'Maori' },
    { value: 'mr', label: 'Marathi' },
    { value: 'mni-Mtei', label: 'Meiteilon (Manipuri)' },
    { value: 'lus', label: 'Mizo' },
    { value: 'mn', label: 'Mongolian' },
    { value: 'my', label: 'Myanmar (Burmese)' },
    { value: 'ne', label: 'Nepali' },
    { value: 'no', label: 'Norwegian' },
    { value: 'ny', label: 'Nyanja (Chichewa)' },
    { value: 'or', label: 'Odia (Oriya)' },
    { value: 'om', label: 'Oromo' },
    { value: 'ps', label: 'Pashto' },
    { value: 'fa', label: 'Persian' },
    { value: 'pl', label: 'Polish' },
    { value: 'pt', label: 'Portuguese (Portugal, Brazil)' },
    { value: 'pa', label: 'Punjabi' },
    { value: 'qu', label: 'Quechua' },
    { value: 'ro', label: 'Romanian' },
    { value: 'ru', label: 'Russian' },
    { value: 'sm', label: 'Samoan' },
    { value: 'sa', label: 'Sanskrit' },
    { value: 'gd', label: 'Scots Gaelic' },
    { value: 'nso', label: 'Sepedi' },
    { value: 'sr', label: 'Serbian' },
    { value: 'st', label: 'Sesotho' },
    { value: 'sn', label: 'Shona' },
    { value: 'sd', label: 'Sindhi' },
    { value: 'si', label: 'Sinhala (Sinhalese)' },
    { value: 'sk', label: 'Slovak' },
    { value: 'sl', label: 'Slovenian' },
    { value: 'so', label: 'Somali' },
    { value: 'es', label: 'Spanish' },
    { value: 'su', label: 'Sundanese' },
    { value: 'sw', label: 'Swahili' },
    { value: 'sv', label: 'Swedish' },
    { value: 'tl', label: 'Tagalog (Filipino)' },
    { value: 'tg', label: 'Tajik' },
    { value: 'ta', label: 'Tamil' },
    { value: 'tt', label: 'Tatar' },
    { value: 'te', label: 'Telugu' },
    { value: 'th', label: 'Thai' },
    { value: 'ti', label: 'Tigrinya' },
    { value: 'ts', label: 'Tsonga' },
    { value: 'tr', label: 'Turkish' },
    { value: 'tk', label: 'Turkmen' },
    { value: 'ak', label: 'Twi (Akan)' },
    { value: 'uk', label: 'Ukrainian' },
    { value: 'ur', label: 'Urdu' },
    { value: 'ug', label: 'Uyghur' },
    { value: 'uz', label: 'Uzbek' },
    { value: 'vi', label: 'Vietnamese' },
    { value: 'cy', label: 'Welsh' },
    { value: 'xh', label: 'Xhosa' },
    { value: 'yi', label: 'Yiddish' },
    { value: 'yo', label: 'Yoruba' },
    { 'value': 'zu', "label": 'Zulu' },
  ];

  return (
    <div className="convert1">
      <form className="row g-3">
      <div className="col-md-12">
          <label htmlFor="mode" className="form-label">Choose Mode:</label>
          <Select
            id="mode"
            className="form-select"
            options={modeOptions}
            placeholder="Select"
            value={selectedMode}
            onChange={handleModeChange}
          />
        </div>
        <div className="col-md-6">
          
          <label htmlFor="Slang" className="form-label">Source Language:</label>
          <Select
            id="Slang"
            className="form-select"
            options={languageOptions}
            placeholder="Select"
            value={selectedSourceLanguage}
            onChange={handleSourceLanguageChange}
            isDisabled={!selectedMode}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="tlang" className="form-label">Target Language:</label>
          <Select
            id="tlang"
            className="form-select"
            options={languageOptions}
            placeholder="Select"
            value={selectedTargetLanguage}
            onChange={handleTargetLanguageChange}
            isDisabled={!selectedMode}
          />
        </div>
        
        <div>
          {selectedMode && (selectedMode.value === 'textconvert' || selectedMode.value === 'pdfconvert') && (
            <Toconvert
              to={selectedMode.value === 'textconvert' ? selectedTargetLanguage?.label : ''}
              file={selectedMode.value === 'pdfconvert' ? 'Upload File' : ''}
              from={selectedMode.value === 'textconvert' ? selectedSourceLanguage?.label : ''}
              toLang={selectedTargetLanguage?.value} 
              fromLang={selectedSourceLanguage?.value}
            />
          )}
          {selectedMode && selectedMode.value === 'documentformat' && (
            <Format
            to={selectedMode.value === 'textconvert' ? selectedTargetLanguage?.label : 'Enter the details you wish to change'}
            file={selectedMode.value === 'pdfconvert' ? 'Upload File' : ''}
            toLang={selectedTargetLanguage?.value} 
            fromLang={selectedSourceLanguage?.value}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Convert;