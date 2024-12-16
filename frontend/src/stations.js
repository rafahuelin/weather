const stations = {
  "ALFORJA": "0009X",
  "REUS/AEROPUERTO": "0016A",
  "VALLS": "0034X",
  "TARRAGONA  FAC. GEOGRAFIA": "0042Y",
  "PONTONS": "0061X",
  "VILAFRANCA DEL PENED\u00c8S": "0066X",
  "SITGES-VALLCARCA": "0073X",
  "BARCELONA/AEROPUERTO": "0076",
  "BERGA  INSTITUTO": "0092X",
  "BALSARENY": "0106X",
  "PRATS DE LLU\u00c7AN\u00c8S": "0114X",
  "MOI\u00c0": "0120X",
  "MANRESA": "0149X",
  "MONTSERRAT": "0158X",
  "IGUALADA": "0171X",
  "BARCELONA  PORT OL\u00cdMPIC": "0201D",
  "BARCELONA  DRASSANES": "0201X",
  "CALDES DE MONTBUI": "0222X",
  "VILASSAR DE DALT": "0244X",
  "ARENYS DE MAR": "0252D",
  "FONTMARTINA": "0260X",
  "BLANES JARDIN BOTANICO": "0281Y",
  "CASTELL PLATJA D?ARO": "0284X",
  "SANT PAU DE SEGURIES": "0312X",
  "PLANOLES": "0320I",
  "RIPOLL": "0324A",
  "LES PLANES D?HOSTOLES": "0360X",
  "SANT HILARI": "0363X",
  "GIRONA/COSTA BRAVA": "0367",
  "GIRONA-PARC MIGDIA": "0370E",
  "PORQUERES": "0372C",
  "L?ESTARTIT": "0385X",
  "VALL DE BIANYA": "0394X",
  "MA\u00c7ANET DE CABRENYS": "0413A",
  "ESPOLLA  LES ALBERES": "0421X",
  "FIGUERES  ELS ASPRES": "0429X",
  "EVC_CABO DE CREUS": "0433D",
  "BAZT\u00c1N  IRURITA": "1002Y",
  "BERA": "1010X",
  "IRUN": "1012P",
  "DONOSTIA/SAN SEBASTI\u00c1N AEROPUERTO": "1014A",
  "ERRENTERIA  A\u00d1ARBE": "1021X",
  "SEGURA": "1025A",
  "BEASAIN  ARRIARAN": "1025X",
  "ORDIZIA": "1026X",
  "ARESO ": "1033X",
  "LEGAZPI": "1037X",
  "ZUMARRAGA": "1037Y",
  "AZPEITIA": "1038X",
  "ZUMAIA": "1041A",
  "ARAMAIO  ETXAGUEN": "1044X",
  "ARETXABALETA": "1048X",
  "ELGETA": "1049N",
  "ELGOIBAR": "1050J",
  "MUTRIKU": "1052A",
  "FORUA": "1056K",
  "MATXITXAKO": "1057B",
  "PUNTA GALEA ": "1059X",
  "AMURRIO": "1060X",
  "OROZKO  IBARRA": "1064L",
  "ABADI\u00d1O  URKIOLA": "1069Y",
  "AMOREBIETA-ETXANO": "1074C",
  "BALMASEDA": "1078C",
  "G\u00dcE\u00d1ES": "1078I",
  "BILBAO AEROPUERTO": "1082",
  "SOPUERTA": "1083B",
  "CASTRO URDIALES-EDAR": "1083L",
  "RAMALES DE LA VICTORIA-ETAP": "1089U",
  "TRETO": "1096X",
  "SAN ROQUE DE RIOMERA-CARACOL": "1103X",
  "SANTANDER AEROPUERTO": "1109X",
  "SANTANDER CMT": "1111X",
  "VILLACARRIEDO - SANTIBA\u00d1EZ": "1124E",
  "B\u00c1RCENA MAYOR-TORIZ": "1135C",
  "SAN FELICES DE BUELNA-TARRIBA": "1152C",
  "TORRELAVEGA-SIERRAPANDO": "1154H",
  "SAN VICENTE  FARO": "1159",
  "FUENTE D\u00c9-TELEF\u00c9RICO": "1167B",
  "MIRADOR DEL CABLE  PARQUE NACIONAL PICOS DE EUROPA": "1167G",
  "CABA\u00d1A VER\u00d3NICA  PARQUE NACIONAL PICOS DE EUROPA": "1167H",
  "CORISCAO  PARQUE NACIONAL PICOS DE EUROPA": "1167J",
  "TAMA": "1174I",
  "TRESVISO": "1176A",
  "CORDI\u00d1ANES  PARQUE NACIONAL PICOS DE EUROPA": "1178E",
  "VEGA DE URRIELLU  PARQUE NACIONAL PICOS DE EUROPA": "1178I",
  "VEGA DE ARIO  PARQUE NACIONAL PICOS DE EUROPA": "1178M",
  "SOTRES  PARQUE NACIONAL PICOS DE EUROPA": "1178R",
  "SOTO DE VALDE\u00d3N (AUTOMATICA)": "1178Y",
  "CARRE\u00d1A DE CABRALES": "1179B",
  "LLANES": "1183X",
  "AMIEVA  PANIZALES": "1186P",
  "PICO COTORRA  PARQUE NACIONAL PICOS DE EUROPA": "1191D",
  "BARGA\u00c9U PILO\u00d1A": "1199X",
  "COLUNGA": "1203D",
  "GIJ\u00d3N-CAMPUS": "1207U",
  "GIJ\u00d3N  MUSEL": "1208H",
  "CABO PE\u00d1AS": "1210X",
  "ASTURIAS/AVIL\u00c9S": "1212E",
  "PAJARES - VALGRANDE": "1221D",
  "RONZ\u00d3N": "1223P",
  "CUEVAS DE FELECHOSA": "1226X",
  "MIERES-BA\u00cd\u00d1A": "1234P",
  "OVIEDO": "1249X",
  "SOUTU  LA BARCA": "1272B",
  "POLA DE SOMIEDO-DEPURADORA": "1276F",
  "CAMU\u00d1O": "1279X",
  "CABO BUSTO": "1283U",
  "CERVANTES-BAZAL": "1297E",
  "DEGA\u00d1A  COTO CORT\u00c9S": "1302F",
  "SAN ANTOLIN DE IBIAS-LINARES": "1309C",
  "ONETA": "1327A",
  "CASTROPOL": "1331A",
  "OURIA DE TARAMUNDI": "1341B",
  "RIBADEO  VILAFRAMIL": "1342X",
  "MONDO\u00d1EDO": "1344X",
  "BURELA": "1347T",
  "ESTACA DE BARES": "1351",
  "FERROL-A GRA\u00d1A": "1354C",
  "AS PONTES A AEROSA": "1363X",
  "A CORU\u00d1A": "1387",
  "BENS-A CORU\u00d1A": "1387D",
  "A CORU\u00d1A/ALVEDRO": "1387E",
  "CARBALLO": "1390X",
  "CABO VILAN": "1393",
  "VIMIANZO-CASTRELO": "1399",
  "FISTERRA": "1400",
  "MAZARICOS-A PICOTA": "1406X",
  "SOBRADO DOS MONXES": "1410X",
  "SANTIAGO DE COMPOSTELA/LAVACOLLA": "1428",
  "NOIA": "1435C",
  "EVC_NOIA": "1437P",
  "BOIRO": "1442U",
  "MONTERROSO": "1446X",
  "SILLEDA": "1466A",
  "A ESTRADA": "1468X",
  "PADR\u00d3N": "1473A",
  "SANTIAGO DE COMPOSTELA": "1475X",
  "CASAS DO PORTO": "1476R",
  "VILAGARCIA DE AROUSA": "1477V",
  "PONTEVEDRA": "1484C",
  "ESCUELA NAVAL DE MAR\u00cdN": "1486E",
  "A LAMA": "1489A",
  "VIGO/PEINADOR": "1495",
  "VIGO-O CASTRO": "1496X",
  "LUGO/ROZAS": "1505",
  "LUGO-COL.FINGOI": "1518A",
  "O PARAMO": "1521I",
  "BECERREA-PENAMAIOR": "1521X",
  "EVC_O SAVI\u00d1AO": "1535I",
  "VILLABLINO": "1541B",
  "PUERTO DE LEITARIEGOS": "1542",
  "PONFERRADA": "1549",
  "VILLAR DE OTERO (LOS TROBOS)": "1561I",
  "O BARCO DE VALDEORRAS": "1583X",
  "POBRA DE TRIVES SAN MAMEDE": "1631E",
  "CHANDREXA DE QUEIXA": "1639X",
  "FOLGOSO DO COUREL": "1658",
  "MONFORTE DE LEMOS": "1679A",
  "OURENSE": "1690A",
  "BEARIZ": "1696O",
  "O CARBALLI\u00d1O": "1700X",
  "RIBADAVIA": "1701X",
  "ALLARIZ-RIMELO": "1706A",
  "A CA\u00d1IZA": "1719",
  "PONTEAREAS-CANEDO": "1723X",
  "O ROSAL": "1730E",
  "XINZO DE LIMIA": "1735X",
  "MUI\u00d1OS-PRADO": "1738U",
  "ALTAMIRA": "1740",
  "VINUESA": "2005Y",
  "BARRIOMARTIN-EL ROBLEDO": "2017Y",
  "SORIA": "2030",
  "LUBIA-CEDER": "2044B",
  "MORON DE ALMAZAN ": "2048A",
  "LA RIBA DE ESCALOTE": "2059B",
  "UCERO": "2084Y",
  "BURGO DE OSMA-POZUELOS": "2092",
  "LICERAS-CA\u00d1ADA DEHESA": "2096B",
  "CORU\u00d1A DEL CONDE": "2106B",
  "ARANDA DE DUERO": "2117D",
  "FRESNO DE CANTIESPINO": "2135A",
  "ALDEANUEVA DE SERREZUELA-EL CERRO": "2140A",
  "LA PINILLA  ESTACI\u00d3N DE ESQU\u00cd": "2150H",
  "PE\u00d1AFIEL(FABRICA DE QUESOS)": "2166Y",
  "SARD\u00d3N DE DUERO": "2172Y",
  "RADES": "2182C",
  "CUELLAR": "2192C",
  "CERVERA DE PISUERGA": "2235U",
  "AGUILAR DE CAMPOO": "2243A",
  "VILLAELES DE VALDAVIA": "2276B",
  "VILLADIEGO (DEP\u00d3SITO DE AGUA)": "2285B",
  "PEDROSA DEL PR\u00cdNCIPE": "2290Y",
  "OLVEGA-CAMINO VEGAFR\u00cdA": "2296A",
  "MONTERRUBIO DE LA DEMANDA": "2302N",
  "VILLAMAYOR DE LOS MONTES": "2311Y",
  "BURGOS/VILLAFR\u00cdA": "2331",
  "CAMPORREDONDO DE ALBA  CUEVA DORADA": "2362C",
  "CARRI\u00d3N DE LOS CONDES": "2374X",
  "PALENCIA-AUTILLA PINO": "2400E",
  "PALENCIA-GRANJA VI\u00d1ALTA": "2401X",
  "VALLADOLID": "2422",
  "MU\u00d1OTELLO": "2430Y",
  "\u00c1VILA": "2444",
  "GOTARRENDURA (AUTOMATICA)": "2453E",
  "AREVALO": "2456B",
  "NAVACERRADA PUERTO": "2462",
  "SEGOVIA": "2465",
  "SAN RAFAEL": "2471Y",
  "MIGUELA\u00d1EZ": "2482B",
  "LA COVATILLA  ESTACI\u00d3N DE ESQU\u00cd": "2491C",
  "OLMEDO  DEP\u00d3SITO AGUA": "2503B",
  "RUEDA": "2507Y",
  "RIVILLA DE BARAJAS": "2512Y",
  "FUENTE EL SOL": "2517A",
  "MORALES DEL TORO-DEPOSITO": "2536D",
  "FUENTESAUCO": "2555B",
  "CORESES": "2565",
  "VILLAPUN": "2568D",
  "VILLAL\u00d3N DE CAMPOS": "2593D",
  "MEDINA DE RIOSECO": "2604B",
  "VILLAF\u00c1FILA": "2611D",
  "ZAMORA": "2614",
  "RIA\u00d1O-ERMITA QUINTANILLA": "2624C",
  "SAHECHORES-HELIPUERTO": "2626Y",
  "PUERTO DE SAN ISIDRO": "2630X",
  "LE\u00d3N/VIRGEN DEL CAMINO": "2661",
  "VALENCIA DE DON JUAN": "2664B",
  "MI\u00d1ERA DE LUNA-EMBALSE": "2701D",
  "VILLAMECA": "2728B",
  "ASTORGA-DEP\u00d3SITO AGUA": "2734D",
  "LAGUNAS DE SOMOZA": "2737E",
  "BUSTILLO DEL P\u00c1RAMO-LAS MATILLAS": "2742R",
  "BENAVENTE": "2755X",
  "EL PUENTE (CASA FORESTAL)": "2766E",
  "VILLARDECIERVOS": "2775X",
  "SANTIBA\u00d1EZ DE VIDRIALES": "2777K",
  "POZUELO DE TABARA": "2789H",
  "VILLADEPERA": "2804F",
  "BARCO DE AVILA": "2828Y",
  "PEDROSILLO DE LOS AIRES-CASTILLEJO": "2847X",
  "PEDRAZA DE ALBA-VALLELARGO": "2863C",
  "SALAMANCA/MATACAN": "2867",
  "SALAMANCA OBS.": "2870",
  "BARBADILLO": "2873X",
  "EVC_PE\u00d1AUSENDE": "2882D",
  "FRESNO DE SAYAGO": "2885K",
  "VILLARINO DE LOS AIRES": "2891A",
  "BOADILLA FUENTE SAN ESTEBAN": "2914C",
  "VITIGUDINO": "2916A",
  "EL MAILLO (BASE AVIONES - AUTOMATICA)": "2918Y",
  "BA\u00d1OBAREZ": "2926B",
  "NAVASFRIAS": "2930Y",
  "EL BOD\u00d3N-BASE AEREA": "2945A",
  "SAELICES EL CHICO": "2946X",
  "ALCA\u00d1ICES-VIVINERA": "2966D",
  "MES\u00d3N EROSA": "2969U",
  "AGUAS DE CABREIROA": "2978X",
  "MOLINA DE ARAG\u00d3N": "3013",
  "ZAOREJAS": "3021Y",
  "BETETA": "3040Y",
  "PASTRANA": "3085Y",
  "TARANCON": "3094B",
  "OCA\u00d1A": "3099Y",
  "ARANJUEZ": "3100B",
  "PANTANO EL VADO": "3103",
  "EL PAULAR- RASCAFR\u00cdA (AUTOM\u00c1TICA)": "3104Y",
  "BUITRAGO": "3110C",
  "SOMOSIERRA": "3111D",
  "SAN SEBASTIAN DE LOS REYES": "3125Y",
  "EL GOLOSO (AUTOM\u00c1TICA)": "3126Y",
  "MADRID/BARAJAS": "3129",
  "MADRID BARAJAS RS.": "3129A",
  "SIG\u00dcENZA": "3130C",
  "MANDAYONA": "3140Y",
  "EVC_CAMPISABALOS": "3158D",
  "GUADALAJARA": "3168D",
  "ALCALA DE HENARES-ENC\u00cdN": "3170Y",
  "ARGANDA DEL REY": "3182Y",
  "COLMENAR VIEJO/FAMET": "3191E",
  "MADRID  C. UNIVERSITARIA": "3194U",
  "POZUELO DE ALARCON (AUTOM\u00c1TICA)": "3194Y",
  "MADRID RETIRO": "3195",
  "BRIHUEGA": "3209Y",
  "TIELMES": "3229Y",
  "TEMBLEQUE": "3245Y",
  "MORA DE TOLEDO (AUTOM\u00c1TICA)": "3254Y",
  "TOLEDO": "3260B",
  "ALTO DE LOS LEONES": "3266A",
  "ALPEDRETE": "3268C",
  "NAVAHERMOSA": "3305Y",
  "PUERTO EL PICO": "3319D",
  "ROZAS DE PUERTO REAL": "3330Y",
  "CEBREROS": "3337U",
  "ROBLEDO DE CHAVELA": "3338",
  "VALDEMORILLO": "3343Y",
  "CASTILLO BAYUELA": "3362Y",
  "TALAVERA DE LA REINA": "3365A",
  "NAVALVILLAR DE IBOR": "3386A",
  "CANDELEDA (AUTOMATICA)": "3422D",
  "MADRIGAL DE LA VERA": "3423I",
  "OROPESA DEHES\u00d3N DEL  ENCINAR": "3427Y",
  "NAVALMORAL DE LA MATA": "3434X",
  "GARGANTA LA OLLA": "3436D",
  "SERRADILLA (AUTOMATICA)": "3448X",
  "JARAICEJO": "3455X",
  "TRUJILLO": "3463Y",
  "C\u00c1CERES": "3469A",
  "CA\u00d1AVERAL": "3475X",
  "NU\u00d1OMORAL": "3494U",
  "GUIJO DE GRANADILLA": "3503",
  "HERVAS": "3504X",
  "MONTEHERMOSO": "3512X",
  "TORNAVACAS": "3514B",
  "PIORNAL (AUTOMATICA)": "3516X",
  "PLASENCIA": "3519X",
  "CORIA": "3526X",
  "TORRECILLA DE LOS ANGELES": "3531X",
  "HOYOS": "3536X",
  "ZARZA LA MAYOR": "3540X",
  "VALVERDE DE FRESNO": "3547X",
  "ALISEDA  LA UMBR\u00cdA": "3562X",
  "BROZAS (AUTOMATICA)": "3565X",
  "VALENCIA DE ALC\u00c1NTARA": "3576X",
  "OSSA DE MONTIEL": "4007Y",
  "ALC\u00c1ZAR DEL REY": "4051Y",
  "QUINTANAR DE LA ORDEN": "4061X",
  "ALCAZAR DE SAN JUAN": "4064Y",
  "MADRIDEJOS": "4067",
  "ABIA DE OBISPALIA": "4070Y",
  "VILLARES DEL SAZ": "4075Y",
  "ALBERCA DE ZANCARA": "4089A",
  "SAN CLEMENTE": "4090Y",
  "VILLARROBLEDO": "4091Y",
  "OSA DE LA VEGA (AUTOM\u00c1TICA)": "4093Y",
  "BELMONTE": "4095Y",
  "MUNERA  SAN BARTOLOM\u00c9 (AUTOM\u00c1TICA)": "4096Y",
  "TOMELLOSO": "4103X",
  "ALMAGRO/FAMET": "4116I",
  "CIUDAD REAL": "4121",
  "VILLANUEVA DE LOS INFANTES": "4138Y",
  "VALDEPE\u00d1AS": "4147X",
  "VISO DEL MARQU\u00c9S": "4148",
  "EL ROBLEDO": "4193Y",
  "ALCORNOQUERA  PARQUE NACIONAL CABA\u00d1EROS": "4195E",
  "ABENOJAR (AUTOMATICA)": "4210Y",
  "PUERTO DEL REY": "4236Y",
  "HERRERA DEL DUQUE": "4244X",
  "GUADALUPE (AUTOMATICA)": "4245X",
  "PERALEDA DEL ZAUCEJO": "4260",
  "VALSEQUILLO": "4263X",
  "HINOJOSA DEL DUQUE": "4267X",
  "MINAS DE ALMAD\u00c9N": "4300Y",
  "CASTUERA": "4325Y",
  "CA\u00d1AMERO  EL PINAR": "4339X",
  "NAVALVILLAR DE PELA": "4340",
  "ZORITA": "4347X",
  "DON BENITO": "4358X",
  "RETAMAL DE LLERENA ": "4362X",
  "LLERENA": "4386B",
  "VILLAFRANCA DE LOS BARROS": "4395X",
  "M\u00c9RIDA": "4410X",
  "ALCUESCAR": "4411C",
  "ZAFRA (AUTOMATICA)": "4427X",
  "ALMENDRALEJO": "4436Y",
  "BADAJOZ/TALAVERA LA REAL": "4452",
  "ALBURQUERQUE": "4464X",
  "PUEBLA DE OBANDO (AUTOMATICA)": "4468X",
  "BADAJOZ UNIVERSIDAD": "4478X",
  "OLIVENZA": "4486X",
  "ALCONCHEL (AUTOMATICA)": "4489X",
  "EVC_BARCARROTA": "4492F",
  "VILLANUEVA DEL FRESNO": "4497X",
  "MONESTERIO (AUTOMATICA)": "4499X",
  "FUENTE DE CANTOS": "4501X",
  "JEREZ DE LOS CABALLEROS": "4511C",
  "FREGENAL DE LA SIERRA": "4520X",
  "AROCHE (MASERA - AUTOMATICA)": "4527X",
  "EL GRANADO (BOCACHANZA - AUTOM\u00c1TICA)": "4541X",
  "AYAMONTE  ISLA CANELA": "4549Y",
  "CARTAYA   PEMARES ": "4554X",
  "ALAJAR  CABEZO MOLINOS": "4560Y",
  "VALVERDE CAMINO (CH.GUADIANA AUTOMATICA)": "4575X",
  "EL CERRO DE ANDEVALO": "4584X",
  "ALOSNO  THARSIS-MINAS ": "4589X",
  "EL CAMPILLO  EL ZUMAJO ": "4608X",
  "VILLARRASA  PLANTA DE RECICLAJE": "4622X",
  "HUELVA  RONDA ESTE": "4642E",
  "CEUTA": "5000C",
  "CAZORLA (AUTOMATICA)": "5038Y",
  "Hu\u00e9scar": "5051X",
  "TOPARES": "5060X",
  "CAMARATE 2  PARQUE NACIONAL SIERRA NEVADA": "5103E",
  "CAMARATE  PARQUE NACIONAL SIERRA NEVADA": "5103F",
  "D\u00d3LAR": "5107D",
  "GUADIX": "5112X",
  "BAEZA": "5164B",
  "TORRES": "5165X",
  "ARROYO DEL OJANCO": "5181D",
  "VILLARRODRIGO": "5192",
  "VILLANUEVA DEL ARZOBISPO": "5210X",
  "JA\u00c9N": "5270B",
  "LINARES (VOR - AUTOMATICA)": "5279X",
  "BAIL\u00c9N": "5281X",
  "AND\u00daJAR": "5298X",
  "PUERTOLLANO": "5304Y",
  "FUENCALIENTE": "5341C",
  "CARDE\u00d1A (SANTA ELENA - AUTOMATICA)": "5346X",
  "MONTORO VEGA ARMIJO": "5361X",
  "VILLANUEVA DE C\u00d3RDOBA": "5390Y",
  "CORDOBA  EMBALSE DE GUADANU\u00d1O": "5394X",
  "C\u00d3RDOBA/AEROPUERTO": "5402",
  "CHARILLA": "5406X",
  "PRIEGO DE C\u00d3RDOBA  SAN FELIX": "5412X",
  "DO\u00d1A MENCIA": "5427X",
  "C\u00d3RDOBA  PRAGDENA": "5429X",
  "ESPIEL-C.T\u00c9RMICA": "5459X",
  "FUENTE PALMERA-LOS ARROYONES": "5470",
  "AZUAGA (AUTOMATICA)": "5473X",
  "PRADOLLANO  PARQUE NACIONAL SIERRA NEVADA": "5511",
  "GRANADA/BASE A\u00c9REA": "5514Z",
  "EVC_V\u00cdZNAR": "5515D",
  "GRANADA-CARTUJA": "5515X",
  "SIERRA NEVADA - RADIOTELESCOPIO": "5516D",
  "GRANADA/AEROPUERTO": "5530E",
  "LOJA": "5582A",
  "BENAMEJ\u00cd-ALCACHOFARES ALTOS": "5598X",
  "RODA DE ANDALUC\u00cdA": "5612B",
  "LORA DE ESTEPA (AUTOMATICA)": "5612X",
  "AGUILAR (LAGUNA ZO\u00d1AR AUTOMATICA)": "5624X",
  "LA RAMBLA   PRIVILEGIO": "5625X",
  "ECIJA": "5641X",
  "LA PUEBLA DE LOS INFANTES": "5654X",
  "FUENTES DE ANDALUCIA  EL TRAVIESO": "5656",
  "CARMONA  VILLEGAS": "5702X",
  "CAZALLA DE LA SIERRA": "5704B",
  "GUADALCANAL  CRISTO": "5726X",
  "ALMADEN PLATA (LAS NAVAS AUTOMATICA)": "5733X",
  "CALA": "5769X",
  "SEVILLA/SAN PABLO": "5783",
  "Tomares  Zaud\u00edn": "5788X",
  "TABLADA": "5790Y",
  "MOR\u00d3N DE LA FRONTERA": "5796",
  "CARRION DE LOS CESPEDES": "5835X",
  "ALMONTE  DO\u00d1ANA ": "5858X",
  "EL ARENOSILLO": "5860E",
  "LAS CABEZAS DE SAN JUAN (MAJOLETO AUTOMATICA)": "5891X",
  "CHIPIONA  ECA": "5906X",
  "ROTA BASE NAVAL": "5910X",
  "GRAZALEMA": "5911A",
  "OLVERA-COOP.AGR\u00cdCOLA": "5919X",
  "EL BOSQUE  SAN JOS\u00c9": "5941X",
  "SAN JOSE DEL VALLE-PT GUADALCAC\u00cdN": "5950X",
  "JEREZ DE LA FRONTERA/AEROPUERTO": "5960",
  "SAN FERNANDO": "5972X",
  "C\u00c1DIZ  OBSERVATORIO": "5973",
  "MEDINA SIDONIA (EL HUNDIDO - AUTOMATICA)": "5983X",
  "VEJER DE LA FRONTERA": "5995B",
  "BARBATE  DEPURADORA": "5996B",
  "OSUNA  SEA": "5998X",
  "MELILLA": "6000A",
  "TARIFA": "6001",
  "RONDA  IES": "6032X",
  "CORTES DE LA FRONTERA": "6040X",
  "JIMENA DE LA FRONTERA-EL DORADO": "6042I",
  "ALPANDEIRE": "6045X",
  "GAUC\u00cdN": "6050X",
  "SAN ROQUE  SOTOGRANDE": "6056X",
  "MANILVA": "6057X",
  "ESTEPONA": "6058I",
  "BENAHAVIS (LA ZAGALETA - AUTOMATICA)": "6069X",
  "MARBELLA (PUERTO BANUS - AUTOMATICA)": "6076X",
  "MARBELLA  CABOPINO": "6083X",
  "FUENGIROLA": "6084X",
  "TORREMOLINOS": "6088X",
  "ANTEQUERA-BOBADILLA": "6106X",
  "\u00c1LORA  LAS PELONAS": "6127X",
  "COIN (AUTOMATICA)": "6143X",
  "M\u00c1LAGA/AEROPUERTO": "6155A",
  "M\u00c1LAGA CMT": "6156X",
  "M\u00c1LAGA PUERTO": "6172O",
  "M\u00c1LAGA": "6172X",
  "RINCON DE LA VICTORIA (AUTOMATICA)": "6175X",
  "VELEZ MALAGA (AUTOMATICA)": "6199X",
  "ALGARROBO (LA MAYORA - AUTOMATICA)": "6201X",
  "NERJA (CUEVAS DE NERJA - AUTOMATICA)": "6213X",
  "CA\u00d1AR  PARQUE NACIONAL SIERRA NEVADA": "6248D",
  "LANJAR\u00d3N": "6258X",
  "SALOBRE\u00d1A": "6267X",
  "MOTRIL PUERTO NA\u00daTICO": "6268Y",
  "CASTELL DEL FERRO": "6272X",
  "ADRA CLUB NA\u00daTICO": "6277B",
  "V\u00c1LOR": "6281X",
  "EL EJIDO (AYUNTAMIENTO - AUTOMATICA)": "6291B",
  "ABLA": "6302A",
  "LA\u00daJAR  PARQUE NACIONAL SIERRA NEVADA": "6307C",
  "LAUJAR DE ANDARAX": "6307X",
  "R\u00c1GOL  PARQUE NACIONAL SIERRA NEVADA": "6312E",
  "ALMER\u00cdA/AEROPUERTO": "6325O",
  "CABO DE GATA  FARO": "6329X",
  "CARBONERAS - FARO MESA ROLD\u00c1N": "6332Y",
  "NACIMIENTO  PARQUE NACIONAL SIERRA NEVADA": "6335O",
  "GARRUCHA  PUERTO": "6340X",
  "ALBOX": "6364X",
  "HUERCAL OVERA": "6367B",
  "FUENTE DE PIEDRA ": "6375X",
  "\u00c1GUILAS": "7002Y",
  "MAZARR\u00d3N/LAS TORRES": "7007Y",
  "CARTAGENA": "7012C",
  "CARTAGENA - TENTEGORRA": "7012D",
  "CARTAGENA/SALINAS CABO PALOS": "7019X",
  "FUENTE ALAMO": "7023X",
  "TORRE PACHECO (C.C.A. AUT.)": "7026X",
  "MURCIA/SAN JAVIER": "7031X",
  "EMBALSE DE LA FUENSANTA (AUTOM\u00c1TICA)": "7066Y",
  "CA\u00d1ADAS DEL NERPIO": "7067Y",
  "SEGE": "7072Y",
  "BENIZAR": "7080X",
  "HELL\u00cdN": "7096B",
  "TOBARRA": "7103Y",
  "CARAVACA FUENTES DEL MARQU\u00c9S": "7119B",
  "CALASPARRA": "7121A",
  "BULLAS": "7127X",
  "JUMILLA  EL ALBAL": "7138B",
  "CIEZA  PARQUE DE BOMBEROS": "7145D",
  "ARCHENA": "7158X",
  "MULA (P. BOMBEROS - AUT.)": "7172X",
  "MURCIA": "7178I",
  "CARAVACA (LOS ROYOS- AUT.)": "7195X",
  "ZARZILLA DE RAMOS": "7203A",
  "LORCA": "7209",
  "PUERTO LUMBRERAS": "7211B",
  "TOTANA": "7218Y",
  "ALHAMA (COMARZA - AUT.)": "7227X",
  "MOLINA DE SEGURA (LOS VALIENTES)": "7237E",
  "ORIHUELA DESAMPARADOS": "7244X",
  "PINOSO": "7247X",
  "ABANILLA": "7250C",
  "ROJALES  EL MOLINO": "7261X",
  "YECLA": "7275C",
  "FONTANARS - CASA DELS CUPS": "8005X",
  "VILLENA": "8008Y",
  "NOVELDA": "8013X",
  "ELCHE/ALTABIX": "8018X",
  "ALICANTE-ELCHE/AEROPUERTO": "8019",
  "ALICANTE": "8025",
  "BENIDORM (PARC LES FOIETES)": "8036Y",
  "J\u00c1VEA  AYUNTAMIENTO": "8050X",
  "PEGO": "8057C",
  "MIRAMAR": "8058Y",
  "ALCOY": "8059C",
  "BARX": "8072Y",
  "CUENCA": "8096",
  "MOTILLA DEL PALANCAR": "8155Y",
  "ALBACETE/LOS LLANOS": "8175",
  "CHINCHILLA/CENAD": "8177A",
  "ALBACETE OBS.": "8178D",
  "LAS ERAS": "8191Y",
  "JALANCE": "8193E",
  "ALMANSA": "8198Y",
  "EVC_ZARRA": "8203O",
  "SALVACA\u00d1ETE": "8210Y",
  "BICORP": "8270X",
  "ONTINYENT": "8283X",
  "X\u00c1TIVA": "8293X",
  "CARCAIXENT": "8300X",
  "UTIEL  LA CUBERA": "8309X",
  "POLINYA": "8325X",
  "TURIS": "8337X",
  "ALBARRAC\u00cdN": "8354X",
  "TERUEL": "8368U",
  "JABALOYAS  DEP\u00d3SITO": "8376",
  "ADEMUZ": "8381X",
  "CHELVA": "8395X",
  "LLIRIA": "8409X",
  "VALENCIA/AEROPUERTO": "8414A",
  "VALENCIA UPV": "8416X",
  "VALENCIA DT": "8416Y",
  "SEGORBE  MASIA HOYA": "8439X",
  "SAGUNTO (MONTIVER PONTAZGO - SEMIAUTOMATICA)": "8446Y",
  "CEDRILLAS  ANTENAS": "8458X",
  "ARENOS-PANTANO": "8472A",
  "MOSQUERUELA  DEP\u00d3SITO": "8486X",
  "VILLAFRANCA": "8489X",
  "ATZENETA DEL MAESTRAT": "8492X",
  "CASTELL\u00d3N-ALMASSORA": "8500A",
  "TORREBLANCA AYUNTAMIENTO (C.AGRARIA LOCAL)": "8503Y",
  "FREDES": "8520X",
  "NESTARES": "9001D",
  "Alto Campoo": "9001S",
  "SANTA GADEA DE ALFOZ": "9012E",
  "CUBILLO DE EBRO": "9016X",
  "POLIENTES-CASYC": "9019B",
  "BRIVIESCA": "9031C",
  "MEDINA DE POMAR": "9051",
  "LALASTRA": "9060X",
  "MIRANDA DE EBRO": "9069C",
  "AGURAIN/SALVATIERRA  OPAKUA": "9073X",
  "VITORIA-GASTEIZ AEROPUERTO": "9091R",
  "BELORADO": "9111",
  "VALDEZCARAY": "9115X",
  "HARO ": "9121X",
  "LABASTIDA": "9122I",
  "ANGUIANO  VALVANERA ": "9136X",
  "N\u00c1JERA": "9141V",
  "LEZA": "9145X",
  "CENICERO ": "9145Y",
  "LOGRO\u00d1O  AEROPUERTO": "9170",
  "LOS ARCOS": "9171K",
  "CAMPEZO/KANPEZU": "9178X",
  "ENCISO  DEP\u00d3SITO": "9188",
  "AST\u00daN - LA RACA": "9195C",
  "CANFRANC": "9198X",
  "JACA": "9201X",
  "VALLE DE HECHO  HECHO-DEP\u00d3SITO": "9207",
  "ARAG\u00dc\u00c9S DEL PUERTO  DEP\u00d3SITO": "9208E",
  "BAILO PUYALTO": "9211F",
  "ISABA/IZABA": "9218A",
  "OROZ-BETELU/OROTZ-BETELU  DEP\u00d3SITO": "9228J",
  "RONCESVALLES/ORREAGA": "9228T",
  "NAVASCU\u00c9S/NABASKOZE": "9238X",
  "SOS DEL REY CAT\u00d3LICO": "9244X",
  "C\u00c1SEDA  DEP\u00d3SITO": "9245X",
  "OLITE/ERRIBERRI": "9252X",
  "ESTERIBAR  EMBALSE DE EUGI": "9257X",
  "MONREAL/ELO  DEP\u00d3SITO": "9262P",
  "PAMPLONA  AEROPUERTO": "9263D",
  "ARANGUREN  ILUNDAIN": "9263X",
  "IRURTZUN": "9274X",
  "LARRAGA": "9280B",
  "SAN PEDRO MANRIQUE": "9287A",
  "ALFARO  LA PLANA - DEP\u00d3SITO": "9293X",
  "BARDENAS REALES  BASE A\u00c9REA": "9294E",
  "TARAZONA": "9299X",
  "MONTEAGUDO": "9301X",
  "TUDELA  ": "9302Y",
  "EJEA DE LOS CABALLEROS  ERAS ALTAS": "9321Y",
  "CASTEJ\u00d3N DE VALDEJASA  DEP\u00d3SITO": "9336D",
  "ARCOS DE JAL\u00d3N-COEX": "9344C",
  "ALMAZUL": "9352A",
  "ALHAMA DE ARAG\u00d3N  DEP\u00d3SITO": "9354X",
  "SANTA EULALIA  DEL CAMPO": "9374X",
  "EL PEDREGAL": "9377Y",
  "CALAMOCHA": "9381I",
  "DAROCA ": "9390",
  "CALATAYUD  DEP\u00d3SITO": "9394X",
  "LA ALMUNIA DE DO\u00d1A GODINA": "9427X",
  "ZARAGOZA  AEROPUERTO": "9434",
  "ZARAGOZA  VALDESPARTERA": "9434P",
  "FONFR\u00cdA": "9436X",
  "FORMIGAL  SARRIOS": "9445L",
  "PANTICOSA  PETROSOS": "9451F",
  "BIESCAS  EMBALSE DE B\u00daBAL": "9453X",
  "SABI\u00d1\u00c1NIGO": "9460X",
  "ALMUD\u00c9VAR": "9491X",
  "LECI\u00d1ENA": "9495Y",
  "VALMADRID": "9501X",
  "QUINTO": "9510X",
  "MUNIESA": "9513X",
  "MONTALB\u00c1N": "9531Y",
  "H\u00cdJAR  DEP\u00d3SITO": "9546B",
  "ANDORRA  HORCALLANA": "9550C",
  "CASTELLOTE  DEP\u00d3SITO": "9561X",
  "MORELLA - PASEO ALAMEDA": "9562X",
  "CASTELLFORT": "9563X",
  "CALANDA": "9569A",
  "ALCA\u00d1IZ": "9573X",
  "CASPE  PLANA DEL PIL\u00d3N": "9574B",
  "LA MOLINA": "9585",
  "MARTINET": "9590",
  "CAP DE REC": "9590D",
  "COLL DE NARG\u00d3": "9638D",
  "TOR\u00c0": "9647X",
  "ARTESA DE SEGRE": "9650X",
  "ESTERRI D?ANEU": "9657X",
  "PORT AINE  L?ORRI": "9677",
  "CABDELLA-CENTRAL": "9689X",
  "LLIMIANA": "9707",
  "TORDERA - GRANYANELLA": "9718X",
  "OS DE BALAGUER": "9724X",
  "LLORAC": "9726E",
  "MOLLERUSSA": "9729X",
  "BARRUERA": "9744B",
  "SOPEIRA": "9751",
  "BENABARRE": "9756X",
  "LLEIDA": "9771C",
  "LA POBLA DE CERVOLES": "9772X",
  "EL SOLER\u00c0S": "9775X",
  "BIELSA": "9784P",
  "A\u00cdNSA-SOBRARBE  LA SERRETA-DEP\u00d3SITO": "9808X",
  "PARADOR ORDESA-PARQUE NACIONAL ORDESA Y MONTEPERDI": "9812M",
  "TORLA-ORDESA  EL CEBOLLAR": "9814I",
  "TORLA-ORDESA  DEP\u00d3SITO": "9814X",
  "BENASQUE": "9838B",
  "CERLER  COGULLA": "9839V",
  "SEIRA": "9843A",
  "CAPELLA  LAGUARRES": "9855E",
  "BARBASTRO": "9866C",
  "SARI\u00d1ENA  DEP\u00d3SITO": "9894Y",
  "HUESCA  AEROPUERTO": "9898",
  "HUESCA": "9901X",
  "LANAJA  DEP\u00d3SITO": "9908X",
  "BALLOBAR  DEP\u00d3SITO": "9911X",
  "TAMARITE DE LITERA  LA MELUSA": "9918Y",
  "FRAGA": "9924X",
  "VALDERROBRES ": "9935X",
  "HORTA DE SANT JOAN": "9946X",
  "MASSALUCA": "9947X",
  "CABAC\u00c9S": "9961X",
  "RASQUERA": "9975X",
  "TORTOSA": "9981A",
  "CAP DE VAQUEIRA": "9988B",
  "ARTIES": "9990X",
  "BOSSOST-CENTRAL": "9994X",
  "VALCARLOS/LUZAIDE": "9995Y",
  "BELLO": "9998X",
  "LLUC": "B013X",
  "S\u00d3LLER": "B051A",
  "BANYALBUFAR ": "B087X",
  "ANDRATX - SANT ELM": "B103B",
  "ES CAPDELL\u00c0- SON VIC NOU ": "B158X",
  "PALMA-PORTOP\u00cd": "B228",
  "PALMA DIC DE L?OEST": "B228D",
  "PALMA-UNIVERSITAT": "B236C",
  "SIERRA DE ALFABIA": "B248",
  "SON BONET  AEROPUERTO": "B275E",
  "PALMA DE MALLORCA/SON SANT JOAN": "B278",
  "LLUCMAJOR-RADAR": "B301",
  "LLUCMAJOR II": "B334X",
  "PORRERES-SA MESQUIDA": "B341X",
  "CAMPOS-CAN SION ": "B362X",
  "CAMPOS-SALINES  LEVANT": "B373X",
  "CABRERA  PARQUE NACIONAL DE CABRERA": "B398A",
  "SANTANY\u00cd": "B410B",
  "PORTOCOLOM": "B434X",
  "SON SERVERA-CAN PEP MONJO": "B496X",
  "ART\u00c0-MOLI D?EN LEU ": "B526X",
  "CAPDEPERA-FARO": "B569X",
  "COL\u00d2NIA SANT PERE-CAN MENGOL": "B603X",
  "MURO-S?ALBUFERA ": "B605X",
  "MANACOR-POLIESPORTIU": "B614E",
  "PETRA": "B640X",
  "SINEU-POLIESPORTIU": "B644B",
  "SANTA MAR\u00cdA": "B656A",
  "BINISSALEM-SA VINYOTA": "B662X",
  "ESCORCA-SON TORRELLA": "B684A",
  "SA POBLA-SA CANOVA": "B691Y",
  "POLLEN\u00c7A-POLIESPORTIU": "B760X",
  "PORT POLLEN\u00c7A-AERODROM ": "B780X",
  "EVC_MA\u00d3": "B800X",
  "MERCADAL": "B825B",
  "CIUTADELLA-SON QUIM ": "B860X",
  "CIUTADELLA-CALA GALDANA": "B870C",
  "MENORCA/AEROPUERTO": "B893",
  "SANT JOAN DE LABRITJA ": "B908X",
  "SANT ANTONI DE PORTMANY": "B925",
  "IBIZA/ES CODOL\u00c1": "B954",
  "EIVISSA": "B957",
  "FORMENTERA": "B986",
  "TIAS-LAS VEGAS": "C018J",
  "YAIZA-PLAYA BLANCA": "C019V",
  "LANZAROTE/AEROPUERTO": "C029O",
  "HAR\u00cdA-CEMENTERIO": "C038N",
  "TINAJO-LOS DOLORES": "C048W",
  "ROQUE DE LOS MUCHACHOS": "C101A",
  "PUNTAGORDA": "C117A",
  "TIJARAFE-MIRADOR TIME": "C117Z",
  "EL PASO-C.F.": "C126A",
  "FUENCALIENTE-SALINAS": "C129V",
  "TAZACORTE": "C129Z",
  "LA PALMA/AEROPUERTO": "C139E",
  "SAUCES-S.ANDR\u00c9S-BALSA ADEYAHAME": "C148F",
  "P\u00c1JARA-PUERTO MORRO JABLE": "C229J",
  "TUINEJE-PUERTO GRAN TARAJAL": "C239N",
  "ANTIGUA-EL CARB\u00d3N": "C248E",
  "FUERTEVENTURA/AEROPUERTO": "C249I",
  "LA OLIVA (CARRETERA DEL COTILLO)": "C258K",
  "LA OLIVA-PUERTO DE CORRALEJO": "C259X",
  "VALLEHERMOSO-ALTO IGUALERO": "C314Z",
  "ARURE CEMENTERIO": "C316I",
  "AGULO-JUEGO BOLAS": "C317B",
  "VALLEHERMOSO-DAMA": "C319W",
  "HERMIGUA-DEP\u00d3SITO AYUNTAMIENTO": "C328W",
  "SAN SEBASTI\u00c1N DE LA GOMERA": "C329Z",
  "CA\u00d1ADAS PARADOR": "C406G",
  "LOMO DEL BALO": "C419L",
  "ADEJE-CALDERA B": "C419X",
  "ARICO-DEPURADORA LA DEGOLLADA": "C428T",
  "TENERIFE/SUR": "C429I",
  "CANDELARIA-DEPOSITO CUEVECITAS": "C438N",
  "TENERIFE-G\u00dcIMAR": "C439J",
  "LAS MERCEDES-LLANO LOS LOROS": "C446G",
  "TENERIFE/LOS RODEOS": "C447A",
  "SANTA CRUZ DE TENERIFE ": "C449C",
  "ANAGA-COL. REP. ARGENTINA": "C449F",
  "VICTORIA-DEP\u00d3SITO MARRERO": "C457I",
  "TACORONTE-A S.E.A.": "C458A",
  "PUERTO DE LA CRUZ": "C459Z",
  "LLANOS DE MESA ": "C468X",
  "SAN MATEO (CORRAL DE LOS JUNCOS)": "C611E",
  "TEJEDA-CRUZ DE TEJEDA": "C612F",
  "TEJEDA CASCO": "C614H",
  "AGAETE-CASCO": "C619X",
  "LA ALDEA DE SAN NICOLAS": "C619Y",
  "SAN BARTOLOME TIRAJANA (CUEVAS DEL PINAR)": "C623I",
  "SAN BARTOLOME TIRAJANA-LOMO PEDRO ALFONSO": "C625O",
  "SAN NICOLAS T.-TASARTE/COPARLITA": "C628B",
  "MOGAN (PUERTO RICO)": "C629Q",
  "PUERTO DE MOG\u00c1N": "C629X",
  "SAN BARTOLOME TIRAJANA-H.LAS TIRAJANAS": "C635B",
  "SAN BARTOLOME TIRAJANA-C.INSULAR TURISMO": "C639M",
  "SAN BARTOLOME TIRAJANA (EL MATORRAL)": "C639U",
  "AG\u00dcIMES-EL MILANO": "C648C",
  "TELDE-CENTRO FORESTAL DORAMAS": "C648N",
  "LAS PALMAS DE GRAN CANARIA/GANDO": "C649I",
  "TELDE-MELENARA": "C649R",
  "TEROR-OSORIO": "C656V",
  "LAS PALMAS G.C.-TAFIRA/ZURBAR\u00c1N": "C658X",
  "LAS PALMAS G.C. SAN CRIST\u00d3BAL": "C659H",
  "LAS PALMAS DE GC. PLAZA  DE LA FERIA": "C659M",
  "VALLESECO": "C665T",
  "AGAETE - SUERTE ALTA": "C668V",
  "ARUCAS-BA\u00d1ADEROS": "C669B",
  "MASPALOMAS": "C689E",
  "TEGUISE LA GRACIOSA-HELIPUERTO": "C839X",
  "PINAR-DEP\u00d3SITO": "C916Q",
  "DEHESA-REFUGIO": "C917E",
  "SAN ANDR\u00c9S-DEP\u00d3SITO CABILDO": "C925F",
  "VALVERDE": "C928I",
  "EL HIERRO/AEROPUERTO": "C929I",
  "SABINOSA-BALNEARIO": "C939T"
};
