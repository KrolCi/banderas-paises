/** All valid values for a flag
 * @see https://www.flagpack.xyz/docs/flag-index
 */
export type Flags = 'AD' | 'AE' | 'AFRUN' | 'AG' | 'AI' | 'AL' | 'AM' | 'AMS' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ-BO' | 'BQ-SA' | 'BQ-SE' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DJ' | 'DK' | 'DM' | 'DO' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'EU' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB-ENG' | 'GB-SCT' | 'GB-UKM' | 'GB-WLS' | 'GB-NIR' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HM' | 'HN' | 'HR' | 'HT' | 'HU' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN-SK' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RAINBOW' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNASUR' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'YE' | 'ZA' | 'ZM' | 'ZW' | 'AF' | 'BV' | 'AND' | 'ARE' | 'ATG' | 'AIA' | 'ALB' | 'ARM' | 'AGO' | 'ATA' | 'ARG' | 'ASM' | 'AUT' | 'AUS' | 'ABW' | 'ALA' | 'AZE' | 'BIH' | 'BRB' | 'BGD' | 'BEL' | 'BFA' | 'BGR' | 'BHR' | 'BDI' | 'BEN' | 'BLM' | 'BMU' | 'BRN' | 'BOL' | 'BRA' | 'BHS' | 'BTN' | 'BWA' | 'BLR' | 'BLZ' | 'CAN' | 'CCK' | 'COD' | 'CAF' | 'COG' | 'CHE' | 'CIV' | 'COK' | 'CHL' | 'CMR' | 'CHN' | 'COL' | 'CRI' | 'CUB' | 'CPV' | 'CUW' | 'CXR' | 'CYP' | 'CZE' | 'DEU' | 'DJI' | 'DNK' | 'DMA' | 'DOM' | 'ECU' | 'EST' | 'EGY' | 'ESH' | 'ERI' | 'ESP' | 'ETH' | 'FIN' | 'FJI' | 'FLK' | 'FSM' | 'FRO' | 'FRA' | 'GAB' | 'GBR' | 'GRD' | 'GEO' | 'GUF' | 'GGY' | 'GHA' | 'GIB' | 'GRL' | 'GMB' | 'GIN' | 'GLP' | 'GNQ' | 'GRC' | 'SGS' | 'GTM' | 'GUM' | 'GNB' | 'GUY' | 'HKG' | 'HMD' | 'HND' | 'HRV' | 'HTI' | 'HUN' | 'IDN' | 'IRL' | 'ISR' | 'IMN' | 'IND' | 'IOT' | 'IRQ' | 'IRN' | 'ISL' | 'ITA' | 'JEY' | 'JAM' | 'JOR' | 'JPN' | 'KEN' | 'KGZ' | 'KHM' | 'KIR' | 'COM' | 'KNA' | 'PRK' | 'KOR' | 'KWT' | 'CYM' | 'KAZ' | 'LAO' | 'LBN' | 'LCA' | 'LIE' | 'LKA' | 'LBR' | 'LSO' | 'LTU' | 'LUX' | 'LVA' | 'LBY' | 'MAR' | 'MCO ' | 'MDA' | 'MNE' | 'MAF' | 'MDG' | 'MHL' | 'MKD' | 'MLI' | 'MMR' | 'MNG' | 'MAC' | 'MNP' | 'MTQ' | 'MRT' | 'MSR' | 'MLT' | 'MUS' | 'MDV' | 'MWI' | 'MEX' | 'MYS' | 'MOZ' | 'NAM' | 'NCL' | 'NER' | 'NFK' | 'NGA' | 'NIC' | 'NLD' | 'NOR' | 'NPL' | 'NRU' | 'NIU' | 'NZL' | 'OMN' | 'PAN' | 'PER' | 'PYF' | 'PNG' | 'PHL' | 'PAK' | 'POL' | 'SPM' | 'PCN' | 'PRI' | 'PSE' | 'PRT' | 'PLW' | 'PRY' | 'QAT' | 'REU' | 'ROU' | 'SRB' | 'RUS' | 'RWA' | 'SAU' | 'SLB' | 'SYC' | 'SDN' | 'SWE' | 'SGP' | 'SHN' | 'SVN' | 'SJM' | 'SVK' | 'SLE' | 'SMR' | 'SEN' | 'SOM' | 'SUR' | 'SSD' | 'STP' | 'SLV' | 'SXM' | 'SYR' | 'SWZ' | 'TCA' | 'TCD' | 'ATF' | 'TGO' | 'THA' | 'TJK' | 'TKL' | 'TLS' | 'TKM' | 'TUN' | 'TON' | 'TUR' | 'TTO' | 'TUV' | 'TWN' | 'TZA' | 'UKR' | 'UGA' | 'UMI' | 'USA' | 'URY' | 'UZB' | 'VAT' | 'VCT' | 'VEN' | 'VGB' | 'VIR' | 'VNM' | 'VUT' | 'WLF' | 'WSM' | 'YEM' | 'ZAF' | 'ZMB' | 'ZWE' | 'AFG' | 'BVT' | '020' | '784' | '028' | '660' | '008' | '051' | '024' | '010' | '032' | '016' | '040' | '016' | '533' | '248' | '031' | '070' | '052' | '050' | '056' | '854' | '100' | '048' | '108' | '204' | '652' | '060' | '096' | '068' | '076' | '044' | '064' | '072' | '112' | '084' | '124' | '166' | '180' | '140' | '178' | '756' | '384' | '184' | '152' | '120' | '156' | '170' | '188' | '192' | '132' | '531' | '162' | '196' | '203' | '276' | '262' | '208' | '212' | '214' | '218' | '233' | '818' | '732' | '232' | '724' | '231' | '246' | '242' | '238' | '583' | '234' | '250' | '266' | '836' | '308' | '268' | '254' | '831' | '288' | '292' | '304' | '270' | '324' | '312' | '226' | '300' | '239' | '320' | '316' | '624' | '328' | '344' | '334' | '340' | '191' | '332' | '348' | '360' | '372' | '376' | '833' | '356' | '086' | '368' | '364' | '352' | '380' | '832' | '388' | '400' | '392' | '404' | '417' | '116' | '296' | '174' | '659' | '408' | '410' | '414' | '136' | '398' | '418' | '422' | '662' | '438' | '144' | '430' | '426' | '440' | '442' | '428' | '434' | '504' | '492' | '498' | '499' | '663' | '450' | '584' | '807' | '466' | '104' | '496' | '446' | '580' | '474' | '478' | '500' | '470' | '480' | '462' | '454' | '484' | '458' | '508' | '516' | '540' | '562' | '574' | '566' | '558' | '528' | '578' | '524' | '520' | '570' | '554' | '512' | '591' | '604' | '258' | '598' | '608' | '586' | '616' | '666' | '612' | '630' | '275' | '620' | '585' | '600' | '634' | '638' | '642' | '688' | '643' | '646' | '682' | '090' | '690' | '729' | '752' | '702' | '654' | '705' | '744' | '703' | '694' | '674' | '686' | '706' | '740' | '728' | '678' | '222' | '534' | '760' | '748' | '796' | '148' | '260' | '768' | '764' | '762' | '772' | '626' | '795' | '788' | '776' | '792' | '780' | '798' | '158' | '834' | '804' | '800' | '581' | '840' | '858' | '860' | '336' | '670' | '862' | '092' | '850' | '704' | '548' | '876' | '882' | '887' | '710' | '894' | '716' | '004' | '074'