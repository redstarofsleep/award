//人员配置
var datas = [
	{part: 'gmsz1', people: [
    {phone: '600001', name: 'xxx', number: 1},
		{phone: '600002', name: 'xxx', number: 2},
		{phone: '600003', name: 'xxx', number: 3},
		// {phone: '600004', name: 'xxx', number: 4},
		{phone: '600005', name: 'xxx', number: 5},
		{phone: '600006', name: 'xxx', number: 6},
		{phone: '600007', name: 'xxx', number: 7},
		{phone: '600008', name: 'xxx', number: 8},
		{phone: '600009', name: 'xxx', number: 9},
		{phone: '600010', name: 'xxx', number: 10},
		{phone: '600011', name: 'xxx', number: 11},
		{phone: '600012', name: 'xxx', number: 12},
		{phone: '600013', name: 'xxx', number: 13},
		// {phone: '600014', name: 'xxx', number: 14},
		{phone: '600015', name: 'xxx', number: 15},
		{phone: '600016', name: 'xxx', number: 16},
		{phone: '600017', name: 'xxx', number: 17},
		{phone: '600018', name: 'xxx', number: 18},
		{phone: '600019', name: 'xxx', number: 19},
		{phone: '600020', name: 'xxx', number: 20},
		{phone: '600021', name: 'xxx', number: 21},
		{phone: '600022', name: 'xxx', number: 22},
		{phone: '600023', name: 'xxx', number: 23},
		// {phone: '600024', name: 'xxx', number: 24},
		{phone: '600025', name: 'xxx', number: 25},
		{phone: '600026', name: 'xxx', number: 26},
		{phone: '600027', name: 'xxx', number: 27},
		{phone: '600028', name: 'xxx', number: 28},
		{phone: '600029', name: 'xxx', number: 29},
		{phone: '600030', name: 'xxx', number: 30},
		{phone: '600031', name: 'xxx', number: 31},
		{phone: '600032', name: 'xxx', number: 32},
		{phone: '600033', name: 'xxx', number: 33},
		// {phone: '600034', name: 'xxx', number: 34},
		{phone: '600035', name: 'xxx', number: 35},
		{phone: '600036', name: 'xxx', number: 36},
		{phone: '600037', name: 'xxx', number: 37},
		{phone: '600038', name: 'xxx', number: 38},
		{phone: '600039', name: 'xxx', number: 39},
		{phone: '600040', name: 'xxx', number: 40},
		{phone: '600041', name: 'xxx', number: 41},
		{phone: '600042', name: 'xxx', number: 42},
		{phone: '600043', name: 'xxx', number: 43},
		// {phone: '600044', name: 'xxx', number: 44},
		{phone: '600045', name: 'xxx', number: 45},
		{phone: '600046', name: 'xxx', number: 46},
		{phone: '600047', name: 'xxx', number: 47},
		{phone: '600048', name: 'xxx', number: 48},
		{phone: '600049', name: 'xxx', number: 49},
		{phone: '600050', name: 'xxx', number: 50},
		{phone: '600051', name: 'xxx', number: 51},
		{phone: '600052', name: 'xxx', number: 52},
		{phone: '600053', name: 'xxx', number: 53},
		// {phone: '600054', name: 'xxx', number: 54},
		{phone: '600055', name: 'xxx', number: 55},
		{phone: '600056', name: 'xxx', number: 56},
		{phone: '600057', name: 'xxx', number: 57},
		{phone: '600058', name: 'xxx', number: 58},
		{phone: '600059', name: 'xxx', number: 59},
		{phone: '600060', name: 'xxx', number: 60},
		{phone: '600061', name: 'xxx', number: 61},
		{phone: '600062', name: 'xxx', number: 62},
		{phone: '600063', name: 'xxx', number: 63},
		// {phone: '600064', name: 'xxx', number: 64},
		{phone: '600065', name: 'xxx', number: 65},
		{phone: '600066', name: 'xxx', number: 66},
		{phone: '600067', name: 'xxx', number: 67},
		{phone: '600068', name: 'xxx', number: 68},
		{phone: '600069', name: 'xxx', number: 69},
		{phone: '600070', name: 'xxx', number: 70},
		{phone: '600071', name: 'xxx', number: 71},
		{phone: '600072', name: 'xxx', number: 72},
		{phone: '600073', name: 'xxx', number: 73},
		// {phone: '600074', name: 'xxx', number: 74},
		{phone: '600075', name: 'xxx', number: 75},
		{phone: '600076', name: 'xxx', number: 76},
		{phone: '600077', name: 'xxx', number: 77},
		{phone: '600078', name: 'xxx', number: 78},
		{phone: '600079', name: 'xxx', number: 79},
		{phone: '600080', name: 'xxx', number: 80},
		{phone: '600081', name: 'xxx', number: 81},
		{phone: '600082', name: 'xxx', number: 82},
		{phone: '600083', name: 'xxx', number: 83},
		// {phone: '600084', name: 'xxx', number: 84},
		{phone: '600085', name: 'xxx', number: 85},
		{phone: '600086', name: 'xxx', number: 86},
		{phone: '600087', name: 'xxx', number: 87},
		{phone: '600088', name: 'xxx', number: 88},
		{phone: '600089', name: 'xxx', number: 89},
		{phone: '600090', name: 'xxx', number: 90},
		{phone: '600091', name: 'xxx', number: 91},
		{phone: '600092', name: 'xxx', number: 92},
		{phone: '600093', name: 'xxx', number: 93},
		// {phone: '600094', name: 'xxx', number: 94},
		{phone: '600095', name: 'xxx', number: 95},
		{phone: '600096', name: 'xxx', number: 96},
		{phone: '600097', name: 'xxx', number: 97},
		{phone: '600098', name: 'xxx', number: 98},
		{phone: '600099', name: 'xxx', number: 99},
		{phone: '600100', name: 'xxx', number: 100},
		{phone: '600101', name: 'xxx', number: 101},
		{phone: '600102', name: 'xxx', number: 102},
		{phone: '600103', name: 'xxx', number: 103},
		// {phone: '600104', name: 'xxx', number: 104},
		{phone: '600105', name: 'xxx', number: 105},
		{phone: '600106', name: 'xxx', number: 106},
		{phone: '600107', name: 'xxx', number: 107},
		{phone: '600108', name: 'xxx', number: 108},
		{phone: '600109', name: 'xxx', number: 109},
		{phone: '600110', name: 'xxx', number: 110},
		{phone: '600111', name: 'xxx', number: 111},
		{phone: '600112', name: 'xxx', number: 112},
		{phone: '600113', name: 'xxx', number: 113},
		// {phone: '600114', name: 'xxx', number: 114},
		{phone: '600115', name: 'xxx', number: 115},
		{phone: '600116', name: 'xxx', number: 116},
		{phone: '600117', name: 'xxx', number: 117},
		{phone: '600118', name: 'xxx', number: 118},
		{phone: '600119', name: 'xxx', number: 119},
		{phone: '600120', name: 'xxx', number: 120},
		{phone: '600121', name: 'xxx', number: 121},
		{phone: '600122', name: 'xxx', number: 122},
		{phone: '600123', name: 'xxx', number: 123},
		// {phone: '600124', name: 'xxx', number: 124},
		{phone: '600125', name: 'xxx', number: 125},
		{phone: '600126', name: 'xxx', number: 126},
		{phone: '600127', name: 'xxx', number: 127},
		{phone: '600128', name: 'xxx', number: 128},
		{phone: '600129', name: 'xxx', number: 129},
		{phone: '600130', name: 'xxx', number: 130},
		{phone: '600131', name: 'xxx', number: 131},
		{phone: '600132', name: 'xxx', number: 132},
		{phone: '600133', name: 'xxx', number: 133},
		// {phone: '600134', name: 'xxx', number: 134},
		{phone: '600135', name: 'xxx', number: 135},
		{phone: '600136', name: 'xxx', number: 136},
		{phone: '600137', name: 'xxx', number: 137},
		{phone: '600138', name: 'xxx', number: 138},
		{phone: '600139', name: 'xxx', number: 139},
		{phone: '600140', name: 'xxx', number: 140},
		{phone: '600141', name: 'xxx', number: 141},
		{phone: '600142', name: 'xxx', number: 142},
		{phone: '600143', name: 'xxx', number: 143},
		// {phone: '600144', name: 'xxx', number: 144},
		{phone: '600145', name: 'xxx', number: 145},
		{phone: '600146', name: 'xxx', number: 146},
		{phone: '600147', name: 'xxx', number: 147},
		{phone: '600148', name: 'xxx', number: 148},
		{phone: '600149', name: 'xxx', number: 149},
		{phone: '600150', name: 'xxx', number: 150}

	]},
	{part: 'other1', people: [
    {phone: '600151', name: 'xxx', number: 151},
		{phone: '600152', name: 'xxx', number: 152},
		{phone: '600153', name: 'xxx', number: 153},
		// {phone: '600154', name: 'xxx', number: 154},
		{phone: '600155', name: 'xxx', number: 155},
		{phone: '600156', name: 'xxx', number: 156},
		{phone: '600157', name: 'xxx', number: 157},
		{phone: '600158', name: 'xxx', number: 158},
		{phone: '600159', name: 'xxx', number: 159},
		{phone: '600160', name: 'xxx', number: 160},
		{phone: '600161', name: 'xxx', number: 161},
		{phone: '600162', name: 'xxx', number: 162},
		{phone: '600163', name: 'xxx', number: 163},
		// {phone: '600164', name: 'xxx', number: 164},
		{phone: '600165', name: 'xxx', number: 165},
		{phone: '600166', name: 'xxx', number: 166},
		{phone: '600167', name: 'xxx', number: 167},
		{phone: '600168', name: 'xxx', number: 168},
		{phone: '600169', name: 'xxx', number: 169},
		{phone: '600170', name: 'xxx', number: 170},
		{phone: '600171', name: 'xxx', number: 171},
		{phone: '600172', name: 'xxx', number: 172},
		{phone: '600173', name: 'xxx', number: 173},
		// {phone: '600174', name: 'xxx', number: 174},
		{phone: '600175', name: 'xxx', number: 175},
		{phone: '600176', name: 'xxx', number: 176},
		{phone: '600177', name: 'xxx', number: 177},
		{phone: '600178', name: 'xxx', number: 178},
		{phone: '600179', name: 'xxx', number: 179},
		{phone: '600180', name: 'xxx', number: 180},
		{phone: '600181', name: 'xxx', number: 181},
		{phone: '600182', name: 'xxx', number: 182},
		{phone: '600183', name: 'xxx', number: 183},
		// {phone: '600184', name: 'xxx', number: 184},
		{phone: '600185', name: 'xxx', number: 185},
		{phone: '600186', name: 'xxx', number: 186},
		{phone: '600187', name: 'xxx', number: 187},
		{phone: '600188', name: 'xxx', number: 188},
		{phone: '600189', name: 'xxx', number: 189},
		{phone: '600190', name: 'xxx', number: 190},
		{phone: '600191', name: 'xxx', number: 191},
		{phone: '600192', name: 'xxx', number: 192},
		{phone: '600193', name: 'xxx', number: 193},
		// {phone: '600194', name: 'xxx', number: 194},
		{phone: '600195', name: 'xxx', number: 195},
		{phone: '600196', name: 'xxx', number: 196},
		{phone: '600197', name: 'xxx', number: 197},
		{phone: '600198', name: 'xxx', number: 198},
		{phone: '600199', name: 'xxx', number: 199},
		{phone: '600200', name: 'xxx', number: 200},
		{phone: '600201', name: 'xxx', number: 201},
		{phone: '600202', name: 'xxx', number: 202},
		{phone: '600203', name: 'xxx', number: 203},
		// {phone: '600204', name: 'xxx', number: 204},
		{phone: '600205', name: 'xxx', number: 205},
		{phone: '600206', name: 'xxx', number: 206},
		{phone: '600207', name: 'xxx', number: 207},
		{phone: '600208', name: 'xxx', number: 208},
		{phone: '600209', name: 'xxx', number: 209},
		{phone: '600210', name: 'xxx', number: 210},
		{phone: '600211', name: 'xxx', number: 211},
		{phone: '600212', name: 'xxx', number: 212},
		{phone: '600213', name: 'xxx', number: 213},
		// {phone: '600214', name: 'xxx', number: 214},
		{phone: '600215', name: 'xxx', number: 215},
		{phone: '600216', name: 'xxx', number: 216},
		{phone: '600217', name: 'xxx', number: 217},
		{phone: '600218', name: 'xxx', number: 218},
		{phone: '600219', name: 'xxx', number: 219},
		{phone: '600220', name: 'xxx', number: 220},
		{phone: '600221', name: 'xxx', number: 221},
		{phone: '600222', name: 'xxx', number: 222},
		{phone: '600223', name: 'xxx', number: 223},
		// {phone: '600224', name: 'xxx', number: 224},
		{phone: '600225', name: 'xxx', number: 225},
		{phone: '600226', name: 'xxx', number: 226},
		{phone: '600227', name: 'xxx', number: 227},
		{phone: '600228', name: 'xxx', number: 228},
		{phone: '600229', name: 'xxx', number: 229},
		{phone: '600230', name: 'xxx', number: 230},
		{phone: '600231', name: 'xxx', number: 231},
		{phone: '600232', name: 'xxx', number: 232},
		{phone: '600233', name: 'xxx', number: 233},
		// {phone: '600234', name: 'xxx', number: 234},
		{phone: '600235', name: 'xxx', number: 235},
		{phone: '600236', name: 'xxx', number: 236},
		{phone: '600237', name: 'xxx', number: 237},
		{phone: '600238', name: 'xxx', number: 238},
		{phone: '600239', name: 'xxx', number: 239},
		{phone: '600240', name: 'xxx', number: 240},
		{phone: '600241', name: 'xxx', number: 241},
		{phone: '600242', name: 'xxx', number: 242},
		{phone: '600243', name: 'xxx', number: 243},
		// {phone: '600244', name: 'xxx', number: 244},
		{phone: '600245', name: 'xxx', number: 245},
		{phone: '600246', name: 'xxx', number: 246},
		{phone: '600247', name: 'xxx', number: 247},
		{phone: '600248', name: 'xxx', number: 248},
		{phone: '600249', name: 'xxx', number: 249},
		{phone: '600250', name: 'xxx', number: 250},
		{phone: '600251', name: 'xxx', number: 251},
		{phone: '600252', name: 'xxx', number: 252},
		{phone: '600253', name: 'xxx', number: 253},
		// {phone: '600254', name: 'xxx', number: 254},
		{phone: '600255', name: 'xxx', number: 255},
		{phone: '600256', name: 'xxx', number: 256},
		{phone: '600257', name: 'xxx', number: 257},
		{phone: '600258', name: 'xxx', number: 258},
		{phone: '600259', name: 'xxx', number: 259},
		{phone: '600260', name: 'xxx', number: 260},
		{phone: '600261', name: 'xxx', number: 261},
		{phone: '600262', name: 'xxx', number: 262},
		{phone: '600263', name: 'xxx', number: 263},
		// {phone: '600264', name: 'xxx', number: 264},
		{phone: '600265', name: 'xxx', number: 265},
		{phone: '600266', name: 'xxx', number: 266},
		{phone: '600267', name: 'xxx', number: 267},
		{phone: '600268', name: 'xxx', number: 268},
		{phone: '600269', name: 'xxx', number: 269},
		{phone: '600270', name: 'xxx', number: 270},
		{phone: '600271', name: 'xxx', number: 271},
		{phone: '600272', name: 'xxx', number: 272},
		{phone: '600273', name: 'xxx', number: 273},
		// {phone: '600274', name: 'xxx', number: 274},
		{phone: '600275', name: 'xxx', number: 275},
		{phone: '600276', name: 'xxx', number: 276},
		{phone: '600277', name: 'xxx', number: 277},
		{phone: '600278', name: 'xxx', number: 278},
		{phone: '600279', name: 'xxx', number: 279},
		{phone: '600280', name: 'xxx', number: 280},
		{phone: '600281', name: 'xxx', number: 281},
		{phone: '600282', name: 'xxx', number: 282},
		{phone: '600283', name: 'xxx', number: 283},
		// {phone: '600284', name: 'xxx', number: 284},
		{phone: '600285', name: 'xxx', number: 285},
		{phone: '600286', name: 'xxx', number: 286},
		{phone: '600287', name: 'xxx', number: 287},
		{phone: '600288', name: 'xxx', number: 288},
		{phone: '600289', name: 'xxx', number: 289},
		{phone: '600290', name: 'xxx', number: 290},
		{phone: '600291', name: 'xxx', number: 291},
		{phone: '600292', name: 'xxx', number: 292},
		{phone: '600293', name: 'xxx', number: 293},
		// {phone: '600294', name: 'xxx', number: 294},
		{phone: '600295', name: 'xxx', number: 295},
		{phone: '600296', name: 'xxx', number: 296},
		{phone: '600297', name: 'xxx', number: 297},
		{phone: '600298', name: 'xxx', number: 298},
		{phone: '600299', name: 'xxx', number: 299},
		{phone: '600300', name: 'xxx', number: 300}
	]},
	{part: 'gmsz2', people: [

	]},
	{part: 'other2', people: [

	]},
	{part: 'gmsz3', people: [

	]},
	{part: 'other3', people: [

	]},
	{part: 'gmsz4', people: [

	]},
	{part: 'other4', people: [

	]},
	{part: 'gmsz5', people: [

	]},
	{part: 'other5', people: [

	]},
	{part: 'gmsz6', people: [

	]},
	{part: 'other6', people: [

	]},
	{part: 'gmsz7', people: [

	]},
	{part: 'other7', people: [

	]},
	{part: 'gmsz8', people: [

	]}
];

exports.getUsers = function() {
	return datas;
};
