const countryCodes = [
    {
        "name": "United States",
        "code": "+1",
        "flag": "🇺🇸"
    },
    {
        "name": "Canada",
        "code": "+1",
        "flag": "🇨🇦"
    },
    {
        "name": "India",
        "code": "+91",
        "flag": "🇮🇳"
    },
    {
        "name": "Afghanistan",
        "code": "+93",
        "flag": "🇦🇫"
    },
    {
        "name": "Aland Islands",
        "code": "+358",
        "flag": "🇦🇽"
    },
    {
        "name": "Albania",
        "code": "+355",
        "flag": "🇦🇱"
    },
    {
        "name": "Algeria",
        "code": "+213",
        "flag": "🇩🇿"
    },
    {
        "name": "AmericanSamoa",
        "code": "+1684",
        "flag": "🇦🇸"
    },
    {
        "name": "Andorra",
        "code": "+376",
        "flag": "🇦🇩"
    },
    {
        "name": "Angola",
        "code": "+244",
        "flag": "🇦🇴"
    },
    {
        "name": "Anguilla",
        "code": "+1264",
        "flag": "🇦🇮"
    },
    {
        "name": "Antarctica",
        "code": "+672",
        "flag": "🇦🇶"
    },
    {
        "name": "Antigua and Barbuda",
        "code": "+1268",
        "flag": "🇦🇬"
    },
    {
        "name": "Argentina",
        "code": "+54",
        "flag": "🇦🇷"
    },
    {
        "name": "Armenia",
        "code": "+374",
        "flag": "🇦🇲"
    },
    {
        "name": "Aruba",
        "code": "+297",
        "flag": "🇦🇼"
    },
    {
        "name": "Australia",
        "code": "+61",
        "flag": "🇦🇺"
    },
    {
        "name": "Austria",
        "code": "+43",
        "flag": "🇦🇹"
    },
    {
        "name": "Azerbaijan",
        "code": "+994",
        "flag": "🇦🇿"
    },
    {
        "name": "Bahamas",
        "code": "+1242",
        "flag": "🇧🇸"
    },
    {
        "name": "Bahrain",
        "code": "+973",
        "flag": "🇧🇭"
    },
    {
        "name": "Bangladesh",
        "code": "+880",
        "flag": "🇧🇩"
    },
    {
        "name": "Barbados",
        "code": "+1246",
        "flag": "🇧🇧"
    },
    {
        "name": "Belarus",
        "code": "+375",
        "flag": "🇧🇾"
    },
    {
        "name": "Belgium",
        "code": "+32",
        "flag": "🇧🇪"
    },
    {
        "name": "Belize",
        "code": "+501",
        "flag": "🇧🇿"
    },
    {
        "name": "Benin",
        "code": "+229",
        "flag": "🇧🇯"
    },
    {
        "name": "Bermuda",
        "code": "+1441",
        "flag": "🇧🇲"
    },
    {
        "name": "Bhutan",
        "code": "+975",
        "flag": "🇧🇹"
    },
    {
        "name": "Bolivia, Plurinational State of",
        "code": "+591",
        "flag": "🇧🇴"
    },
    {
        "name": "Bosnia and Herzegovina",
        "code": "+387",
        "flag": "🇧🇦"
    },
    {
        "name": "Botswana",
        "code": "+267",
        "flag": "🇧🇼"
    },
    {
        "name": "Brazil",
        "code": "+55",
        "flag": "🇧🇷"
    },
    {
        "name": "British Indian Ocean Territory",
        "code": "+246",
        "flag": "🇮🇴"
    },
    {
        "name": "Brunei Darussalam",
        "code": "+673",
        "flag": "🇧🇳"
    },
    {
        "name": "Bulgaria",
        "code": "+359",
        "flag": "🇧🇬"
    },
    {
        "name": "Burkina Faso",
        "code": "+226",
        "flag": "🇧🇫"
    },
    {
        "name": "Burundi",
        "code": "+257",
        "flag": "🇧🇮"
    },
    {
        "name": "Cambodia",
        "code": "+855",
        "flag": "🇰🇭"
    },
    {
        "name": "Cameroon",
        "code": "+237",
        "flag": "🇨🇲"
    },
    {
        "name": "Canada",
        "code": "+1",
        "flag": "🇨🇦"
    },
    {
        "name": "Cape Verde",
        "code": "+238",
        "flag": "🇨🇻"
    },
    {
        "name": "Cayman Islands",
        "code": "+345",
        "flag": "🇰🇾"
    },
    {
        "name": "Central African Republic",
        "code": "+236",
        "flag": "🇨🇫"
    },
    {
        "name": "Chad",
        "code": "+235",
        "flag": "🇹🇩"
    },
    {
        "name": "Chile",
        "code": "+56",
        "flag": "🇨🇱"
    },
    {
        "name": "China",
        "code": "+86",
        "flag": "🇨🇳"
    },
    {
        "name": "Christmas Island",
        "code": "+61",
        "flag": "🇨🇽"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "code": "+61",
        "flag": "🇨🇨"
    },
    {
        "name": "Colombia",
        "code": "+57",
        "flag": "🇨🇴"
    },
    {
        "name": "Comoros",
        "code": "+269",
        "flag": "🇰🇲"
    },
    {
        "name": "Congo",
        "code": "+242",
        "flag": "🇨🇬"
    },
    {
        "name": "Congo, The Democratic Republic of the Congo",
        "code": "+243",
        "flag": "🇨🇩"
    },
    {
        "name": "Cook Islands",
        "code": "+682",
        "flag": "🇨🇰"
    },
    {
        "name": "Costa Rica",
        "code": "+506",
        "flag": "🇨🇷"
    },
    {
        "name": "Cote d'Ivoire",
        "code": "+225",
        "flag": "🇨🇮"
    },
    {
        "name": "Croatia",
        "code": "+385",
        "flag": "🇭🇷"
    },
    {
        "name": "Cuba",
        "code": "+53",
        "flag": "🇨🇺"
    },
    {
        "name": "Cyprus",
        "code": "+357",
        "flag": "🇨🇾"
    },
    {
        "name": "Czech Republic",
        "code": "+420",
        "flag": "🇨🇿"
    },
    {
        "name": "Denmark",
        "code": "+45",
        "flag": "🇩🇰"
    },
    {
        "name": "Djibouti",
        "code": "+253",
        "flag": "🇩🇯"
    },
    {
        "name": "Dominica",
        "code": "+1767",
        "flag": "🇩🇲"
    },
    {
        "name": "Dominican Republic",
        "code": "+1849",
        "flag": "🇩🇴"
    },
    {
        "name": "Ecuador",
        "code": "+593",
        "flag": "🇪🇨"
    },
    {
        "name": "Egypt",
        "code": "+20",
        "flag": "🇪🇬"
    },
    {
        "name": "El Salvador",
        "code": "+503",
        "flag": "🇸🇻"
    },
    {
        "name": "Equatorial Guinea",
        "code": "+240",
        "flag": "🇬🇶"
    },
    {
        "name": "Eritrea",
        "code": "+291",
        "flag": "🇪🇷"
    },
    {
        "name": "Estonia",
        "code": "+372",
        "flag": "🇪🇪"
    },
    {
        "name": "Ethiopia",
        "code": "+251",
        "flag": "🇪🇹"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "code": "+500",
        "flag": "🇫🇰"
    },
    {
        "name": "Faroe Islands",
        "code": "+298",
        "flag": "🇫🇴"
    },
    {
        "name": "Fiji",
        "code": "+679",
        "flag": "🇫🇯"
    },
    {
        "name": "Finland",
        "code": "+358",
        "flag": "🇫🇮"
    },
    {
        "name": "France",
        "code": "+33",
        "flag": "🇫🇷"
    },
    {
        "name": "French Guiana",
        "code": "+594",
        "flag": "🇬🇫"
    },
    {
        "name": "French Polynesia",
        "code": "+689",
        "flag": "🇵🇫"
    },
    {
        "name": "Gabon",
        "code": "+241",
        "flag": "🇬🇦"
    },
    {
        "name": "Gambia",
        "code": "+220",
        "flag": "🇬🇲"
    },
    {
        "name": "Georgia",
        "code": "+995",
        "flag": "🇬🇪"
    },
    {
        "name": "Germany",
        "code": "+49",
        "flag": "🇩🇪"
    },
    {
        "name": "Ghana",
        "code": "+233",
        "flag": "🇬🇭"
    },
    {
        "name": "Gibraltar",
        "code": "+350",
        "flag": "🇬🇮"
    },
    {
        "name": "Greece",
        "code": "+30",
        "flag": "🇬🇷"
    },
    {
        "name": "Greenland",
        "code": "+299",
        "flag": "🇬🇱"
    },
    {
        "name": "Grenada",
        "code": "+1473",
        "flag": "🇬🇩"
    },
    {
        "name": "Guadeloupe",
        "code": "+590",
        "flag": "🇬🇵"
    },
    {
        "name": "Guam",
        "code": "+1671",
        "flag": "🇬🇺"
    },
    {
        "name": "Guatemala",
        "code": "+502",
        "flag": "🇬🇹"
    },
    {
        "name": "Guernsey",
        "code": "+44",
        "flag": "🇬🇬"
    },
    {
        "name": "Guinea",
        "code": "+224",
        "flag": "🇬🇳"
    },
    {
        "name": "Guinea-Bissau",
        "code": "+245",
        "flag": "🇬🇼"
    },
    {
        "name": "Guyana",
        "code": "+595",
        "flag": "🇬🇾"
    },
    {
        "name": "Haiti",
        "code": "+509",
        "flag": "🇭🇹"
    },
    {
        "name": "Holy See (Vatican City State)",
        "code": "+379",
        "flag": "🇻🇦"
    },
    {
        "name": "Honduras",
        "code": "+504",
        "flag": "🇭🇳"
    },
    {
        "name": "Hong Kong",
        "code": "+852",
        "flag": "🇭🇰"
    },
    {
        "name": "Hungary",
        "code": "+36",
        "flag": "🇭🇺"
    },
    {
        "name": "Iceland",
        "code": "+354",
        "flag": "🇮🇸"
    },
    {
        "name": "India",
        "code": "+91",
        "flag": "🇮🇳"
    },
    {
        "name": "Indonesia",
        "code": "+62",
        "flag": "🇮🇩"
    },
    {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "code": "+98",
        "flag": "🇮🇷"
    },
    {
        "name": "Iraq",
        "code": "+964",
        "flag": "🇮🇷"
    },
    {
        "name": "Ireland",
        "code": "+353",
        "flag": "🇮🇪"
    },
    {
        "name": "Isle of Man",
        "code": "+44",
        "flag": "🇮🇲"
    },
    {
        "name": "Israel",
        "code": "+972",
        "flag": "🇮🇱"
    },
    {
        "name": "Italy",
        "code": "+39",
        "flag": "🇮🇹"
    },
    {
        "name": "Jamaica",
        "code": "+1876",
        "flag": "🇯🇲"
    },
    {
        "name": "Japan",
        "code": "+81",
        "flag": "🇯🇵"
    },
    {
        "name": "Jersey",
        "code": "+44",
        "flag": "🇯🇪"
    },
    {
        "name": "Jordan",
        "code": "+962",
        "flag": "🇯🇴"
    },
    {
        "name": "Kazakhstan",
        "code": "+77",
        "flag": "🇰🇿"
    },
    {
        "name": "Kenya",
        "code": "+254",
        "flag": "🇰🇪"
    },
    {
        "name": "Kiribati",
        "code": "+686",
        "flag": "🇰🇮"
    },
    {
        "name": "Korea, Democratic People's Republic of Korea",
        "code": "+850",
        "flag": "🇰🇵"
    },
    {
        "name": "Korea, Republic of South Korea",
        "code": "+82",
        "flag": "🇰🇷"
    },
    {
        "name": "Kuwait",
        "code": "+965",
        "flag": "🇰🇼"
    },
    {
        "name": "Kyrgyzstan",
        "code": "+996",
        "flag": "🇰🇬"
    },
    {
        "name": "Laos",
        "code": "+856",
        "flag": "🇱🇦"
    },
    {
        "name": "Latvia",
        "code": "+371",
        "flag": "🇱🇻"
    },
    {
        "name": "Lebanon",
        "code": "+961",
        "flag": "🇱🇧"
    },
    {
        "name": "Lesotho",
        "code": "+266",
        "flag": "🇱🇸"
    },
    {
        "name": "Liberia",
        "code": "+231",
        "flag": "🇱🇷"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "code": "+218",
        "flag": "🇱🇾"
    },
    {
        "name": "Liechtenstein",
        "code": "+423",
        "flag": "🇱🇮"
    },
    {
        "name": "Lithuania",
        "code": "+370",
        "flag": "🇱🇹"
    },
    {
        "name": "Luxembourg",
        "code": "+352",
        "flag": "🇱🇺"
    },
    {
        "name": "Macao",
        "code": "+853",
        "flag": "🇲🇴"
    },
    {
        "name": "Macedonia",
        "code": "+389",
        "flag": "🇲🇰"
    },
    {
        "name": "Madagascar",
        "code": "+261",
        "flag": "🇲🇬"
    },
    {
        "name": "Malawi",
        "code": "+265",
        "flag": "🇲🇼"
    },
    {
        "name": "Malaysia",
        "code": "+60",
        "flag": "🇲🇾"
    },
    {
        "name": "Maldives",
        "code": "+960",
        "flag": "🇲🇻"
    },
    {
        "name": "Mali",
        "code": "+223",
        "flag": "🇲🇱"
    },
    {
        "name": "Malta",
        "code": "+356",
        "flag": "🇲🇹"
    },
    {
        "name": "Marshall Islands",
        "code": "+692",
        "flag": "🇲🇭"
    },
    {
        "name": "Martinique",
        "code": "+596",
        "flag": "🇲🇶"
    },
    {
        "name": "Mauritania",
        "code": "+222",
        "flag": "🇲🇷"
    },
    {
        "name": "Mauritius",
        "code": "+230",
        "flag": "🇲🇺"
    },
    {
        "name": "Mayotte",
        "code": "+262",
        "flag": "🇾🇹"
    },
    {
        "name": "Mexico",
        "code": "+52",
        "flag": "🇲🇽"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "code": "+691",
        "flag": "🇫🇲"
    },
    {
        "name": "Moldova",
        "code": "+373",
        "flag": "🇲🇩"
    },
    {
        "name": "Monaco",
        "code": "+377",
        "flag": "🇲🇨"
    },
    {
        "name": "Mongolia",
        "code": "+976",
        "flag": "🇲🇳"
    },
    {
        "name": "Montenegro",
        "code": "+382",
        "flag": "🇲🇪"
    },
    {
        "name": "Montserrat",
        "code": "+1664",
        "flag": "🇲🇸"
    },
    {
        "name": "Morocco",
        "code": "+212",
        "flag": "🇲🇦"
    },
    {
        "name": "Mozambique",
        "code": "+258",
        "flag": "🇲🇿"
    },
    {
        "name": "Myanmar",
        "code": "+95",
        "flag": "🇲🇲"
    },
    {
        "name": "Namibia",
        "code": "+264",
        "flag": "🇳🇦"
    },
    {
        "name": "Nauru",
        "code": "+674",
        "flag": "🇳🇷"
    },
    {
        "name": "Nepal",
        "code": "+977",
        "flag": "🇳🇵"
    },
    {
        "name": "Netherlands",
        "code": "+31",
        "flag": "🇳🇱"
    },
    {
        "name": "Netherlands Antilles",
        "code": "+599",
        "flag": "🇧🇶"
    },
    {
        "name": "New Caledonia",
        "code": "+687",
        "flag": "🇳🇨"
    },
    {
        "name": "New Zealand",
        "code": "NZ",
        "code": "+64",
        "flag": "🇳🇿"
    },
    {
        "name": "Nicaragua",
        "code": "+505",
        "flag": "🇳🇮"
    },
    {
        "name": "Niger",
        "code": "+227",
        "flag": "🇳🇪"
    },
    {
        "name": "Nigeria",
        "code": "+234",
        "flag": "🇳🇬"
    },
    {
        "name": "Niue",
        "code": "+683",
        "flag": "🇳🇺"
    },
    {
        "name": "Norfolk Island",
        "code": "+672",
        "flag": "🇳🇫"
    },
    {
        "name": "Northern Mariana Islands",
        "code": "+1670",
        "flag": "🇲🇵"
    },
    {
        "name": "Norway",
        "code": "+47",
        "flag": "🇳🇴"
    },
    {
        "name": "Oman",
        "code": "+968",
        "flag": "🇴🇲"
    },
    {
        "name": "Pakistan",
        "code": "+92",
        "flag": "🇵🇰"
    },
    {
        "name": "Palau",
        "code": "+680",
        "flag": "🇵🇼"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "code": "+970",
        "flag": "🇵🇸"
    },
    {
        "name": "Panama",
        "code": "+507",
        "flag": "🇵🇦"
    },
    {
        "name": "Papua New Guinea",
        "code": "+675",
        "flag": "🇵🇬"
    },
    {
        "name": "Paraguay",
        "code": "+595",
        "flag": "🇵🇾"
    },
    {
        "name": "Peru",
        "code": "+51",
        "flag": "🇵🇪"
    },
    {
        "name": "Philippines",
        "code": "+63",
        "flag": "🇵🇭"
    },
    {
        "name": "Pitcairn",
        "code": "+872",
        "flag": "🇵🇳"
    },
    {
        "name": "Poland",
        "code": "+48",
        "flag": "🇵🇱"
    },
    {
        "name": "Portugal",
        "code": "+351",
        "flag": "🇵🇹"
    },
    {
        "name": "Puerto Rico",
        "code": "+1939",
        "flag": "🇵🇷"
    },
    {
        "name": "Qatar",
        "code": "+974",
        "flag": "🇶🇦"
    },
    {
        "name": "Reunion",
        "code": "+262",
        "flag": "🇷🇪"
    },
    {
        "name": "Romania",
        "code": "+40",
        "flag": "🇷🇴"
    },
    {
        "name": "Russia",
        "code": "+7",
        "flag": "🇷🇺"
    },
    {
        "name": "Rwanda",
        "code": "+250",
        "flag": "🇷🇼"
    },
    {
        "name": "Saint Barthelemy",
        "code": "+590",
        "flag": "🇧🇱"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "code": "+290",
        "flag": "🇸🇭"
    },
    {
        "name": "Saint Kitts and Nevis",
        "code": "+1869",
        "flag": "🇰🇳"
    },
    {
        "name": "Saint Lucia",
        "code": "+1758",
        "flag": "🇱🇨"
    },
    {
        "name": "Saint Martin",
        "code": "+590",
        "flag": "🇲🇫"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "code": "+508",
        "flag": "🇵🇲"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "code": "+1784",
        "flag": "🇻🇨"
    },
    {
        "name": "Samoa",
        "code": "+685",
        "flag": "🇼🇸"
    },
    {
        "name": "San Marino",
        "code": "+378",
        "flag": "🇸🇲"
    },
    {
        "name": "Sao Tome and Principe",
        "code": "+239",
        "flag": "🇸🇹"
    },
    {
        "name": "Saudi Arabia",
        "code": "+966",
        "flag": "🇸🇦"
    },
    {
        "name": "Senegal",
        "code": "+221",
        "flag": "🇸🇳"
    },
    {
        "name": "Serbia",
        "code": "+381",
        "flag": "🇷🇸"
    },
    {
        "name": "Seychelles",
        "code": "+248",
        "flag": "🇸🇨"
    },
    {
        "name": "Sierra Leone",
        "code": "+232",
        "flag": "🇸🇱"
    },
    {
        "name": "Singapore",
        "code": "+65",
        "flag": "🇸🇬"
    },
    {
        "name": "Slovakia",
        "code": "+421",
        "flag": "🇸🇰"
    },
    {
        "name": "Slovenia",
        "code": "+386",
        "flag": "🇸🇮"
    },
    {
        "name": "Solomon Islands",
        "code": "+677",
        "flag": "🇸🇧"
    },
    {
        "name": "Somalia",
        "code": "+252",
        "flag": "🇸🇴"
    },
    {
        "name": "South Africa",
        "code": "+27",
        "flag": "🇿🇦"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "code": "+500",
        "flag": "🇬🇸"
    },
    {
        "name": "South Sudan",
        "code": "+211",
        "flag": "🇸🇸"
    },
    {
        "name": "Spain",
        "code": "+34",
        "flag": "🇪🇸"
    },
    {
        "name": "Sri Lanka",
        "code": "LK",
        "code": "+94",
        "flag": "🇱🇰"
    },
    {
        "name": "Sudan",
        "code": "+249",
        "flag": "🇸🇩"
    },
    {
        "name": "Suriname",
        "code": "+597",
        "flag": "🇸🇷"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "code": "+47",
        "flag": "🇸🇯"
    },
    {
        "name": "Swaziland",
        "code": "+268",
        "flag": "🇸🇿"
    },
    {
        "name": "Sweden",
        "code": "+46",
        "flag": "🇸🇪"
    },
    {
        "name": "Switzerland",
        "code": "+41",
        "flag": "🇨🇭"
    },
    {
        "name": "Syrian Arab Republic",
        "code": "+963",
        "flag": "🇸🇾"
    },
    {
        "name": "Taiwan",
        "code": "+886",
        "flag": "🇹🇼"
    },
    {
        "name": "Tajikistan",
        "code": "+992",
        "flag": "🇹🇯"
    },
    {
        "name": "Tanzania, United Republic of Tanzania",
        "code": "+255",
        "flag": "🇹🇿"
    },
    {
        "name": "Thailand",
        "code": "+66",
        "flag": "🇹🇭"
    },
    {
        "name": "Timor-Leste",
        "code": "+670",
        "flag": "🇹🇱"
    },
    {
        "name": "Togo",
        "code": "+228",
        "flag": "🇹🇬"
    },
    {
        "name": "Tokelau",
        "code": "+690",
        "flag": "🇹🇰"
    },
    {
        "name": "Tonga",
        "code": "+676",
        "flag": "🇹🇴"
    },
    {
        "name": "Trinidad and Tobago",
        "code": "+1868",
        "flag": "🇹🇹"
    },
    {
        "name": "Tunisia",
        "code": "+216",
        "flag": "🇹🇳"
    },
    {
        "name": "Turkey",
        "code": "+90",
        "flag": "🇹🇷"
    },
    {
        "name": "Turkmenistan",
        "code": "+993",
        "flag": "🇹🇲"
    },
    {
        "name": "Turks and Caicos Islands",
        "code": "+1649",
        "flag": "🇹🇨"
    },
    {
        "name": "Tuvalu",
        "code": "+688",
        "flag": "🇹🇻"
    },
    {
        "name": "Uganda",
        "code": "+256",
        "flag": "🇺🇬"
    },
    {
        "name": "Ukraine",
        "code": "+380",
        "flag": "🇺🇦"
    },
    {
        "name": "United Arab Emirates",
        "code": "+971",
        "flag": "🇦🇪"
    },
    {
        "name": "United Kingdom",
        "code": "+44",
        "flag": "🇬🇧"
    },
    {
        "name": "United States",
        "code": "+1",
        "flag": "🇺🇸"
    },
    {
        "name": "Uruguay",
        "code": "+598",
        "flag": "🇺🇾"
    },
    {
        "name": "Uzbekistan",
        "code": "+998",
        "flag": "🇺🇿"
    },
    {
        "name": "Vanuatu",
        "code": "+678",
        "flag": "🇻🇺"
    },
    {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "code": "+58",
        "flag": "🇻🇪"
    },
    {
        "name": "Vietnam",
        "code": "+84",
        "flag": "🇻🇳"
    },
    {
        "name": "Virgin Islands, British",
        "code": "+1284",
        "flag": "🇻🇬"
    },
    {
        "name": "Virgin Islands, U.S.",
        "code": "+1340",
        "flag": "🇻🇮"
    },
    {
        "name": "Wallis and Futuna",
        "code": "+681",
        "flag": "🇼🇫"
    },
    {
        "name": "Yemen",
        "code": "+967",
        "flag": "🇾🇪"
    },
    {
        "name": "Zambia",
        "code": "+260",
        "flag": "🇿🇲"
    },
    {
        "name": "Zimbabwe",
        "code": "+263",
        "flag": "🇿🇼"
    }
]

export default countryCodes;