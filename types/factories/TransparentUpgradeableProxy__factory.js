"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransparentUpgradeableProxy__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_logic",
                type: "address",
            },
            {
                internalType: "address",
                name: "admin_",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
var _bytecode = "0x0004000000000002000400000000000200000000030100190000006003300270000001e10430019700030000004103550002000000010355000001e10030019d000100000000001f0000008001000039000000400010043f00000000030000310000000101200190000000560000c13d000000000130004c000000620000c13d000001e801000041000000000101041a000001e5011001970000000002000411000000000112004b000000c60000c13d0000000201000367000000000101043b000001e901100197000001ea0210009c000000c70000c13d0000000001000416000000000110004c0000021b0000c13d000001f6010000410000000001100031000001f70110009c0000021b0000413d00000004010000390000000201100367000000000401043b000001e50140009c0000021b0000213d000000400200043d000001fb0120009c0000005c0000213d0000002001200039000200000001001d000000400010043f000300000002001d0000000000020435000001ff0100004100000000001004390000000400400443000001e1010000410000000002000414000001e10320009c0000000001024019000000c00110021000000200011001c70000800202000039000400000004001d077e07740000040f000000040500002900000001022001900000021b0000613d000000000101043b000000000110004c000001380000c13d000000400100043d00000064021000390000020803000041000000000032043500000044021000390000020903000041000000000032043500000024021000390000002d030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c00000000010280190000004001100210000001fe011001c700000780000104300000009f02300039000000200100008a000000000212016f000001e204200041000001e30440009c000000630000213d0000020a0100004100000000001004350000004101000039000000040010043f0000020b010000410000078000010430077e03740000040f000000400020043f0000001f0230018f00000002040003670000000505300272000000710000613d00000000060000190000000507600210000000000874034f000000000808043b000000800770003900000000008704350000000106600039000000000756004b000000690000413d000000000620004c000000800000613d0000000505500210000000000454034f00000003022002100000008005500039000000000605043300000000062601cf000000000626022f000000000404043b0000010002200089000000000424022f00000000022401cf000000000262019f0000000000250435000001e4020000410000005f0430008c00000000040000190000000004022019000001e405300197000000000650004c0000000002008019000001e40550009c000000000204c019000000000220004c0000021b0000613d000000800900043d000001e50290009c0000021b0000213d000000a00a00043d000001e502a0009c0000021b0000213d000000c00400043d000001e60240009c0000021b0000213d00000080053000390000009f02400039000001e403000041000000000652004b00000000060000190000000006038019000001e407500197000001e402200197000000000872004b0000000003008019000000000272013f000001e40220009c00000000020600190000000002036019000000000220004c0000021b0000c13d00000080024000390000000003020433000001e60230009c0000005c0000213d0000003f02300039000000000112016f000000400700043d0000000001170019000000000271004b00000000020000190000000102004039000001e60610009c0000005c0000213d00000001022001900000005c0000c13d000000400010043f0000000002370436000000a0014000390000000004130019000000000454004b0000021b0000213d000200000009001d00030000000a001d000400000007001d077e02260000040f000000020100002900000003020000290000000403000029077e02350000040f000000200100003900000100001004430000012000000443000001e7010000410000077f0001042e077e048b0000040f000001eb0210009c0000021b0000613d000001ec0210009c000001080000c13d0000000001000416000000000110004c0000021b0000c13d000001f6010000410000000001100031000001f70110009c0000021b0000413d00000004010000390000000201100367000000000301043b000001e50130009c0000021b0000213d000001e801000041000000000401041a000000400100043d00000020021000390000000000320435000300000004001d000001e5024001970000000000210435000001e102000041000400000003001d0000000003000414000001e10430009c0000000003028019000001e10410009c00000000010280190000004001100210000000c002300210000000000112019f000001f8011001c70000800d020000390000000103000039000001f904000041077e076f0000040f000000040300002900000001012001900000021b0000613d000000000130004c0000015a0000c13d000000400100043d0000006402100039000001fc0300004100000000003204350000004402100039000001fd030000410000000000320435000000240210003900000026030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c00000000010280190000004001100210000001fe011001c70000078000010430000001ed0210009c000001190000c13d0000000001000416000000000110004c0000021b0000c13d000001e801000041000000000301041a000000400100043d00000020020000390000000002210436000001e5033001970000000000320435000001f50310009c0000005c0000213d0000004003100039000000400030043f000001650000013d000001ee0110009c0000012a0000c13d0000000001000416000000000110004c0000021b0000c13d000001f401000041000000000301041a000000400100043d00000020020000390000000002210436000001e5033001970000000000320435000001f50310009c0000005c0000213d0000004003100039000000400030043f000001650000013d000001ef01000041000000800010043f0000002001000039000000840010043f0000004201000039000000a40010043f000001f001000041000000c40010043f000001f101000041000000e40010043f000001f201000041000001040010043f000001f3010000410000078000010430000001f401000041000000000201041a000001fa02200197000000000252019f000000000021041b000000400100043d000001e1020000410000000003000414000001e10430009c0000000003028019000001e10410009c00000000010280190000004001100210000000c002300210000000000112019f00000201011001c70000800d0200003900000002030000390000020204000041077e076f0000040f000000040600002900000001012001900000021b0000613d00000003040000290000000001040433000000000110004c0000016f0000c13d000000400100043d000001fb0210009c0000005c0000213d0000002002100039000000400020043f0000000000010435000001650000013d0000000301000029000001fa01100197000000000131019f000001e802000041000000000012041b000000400100043d000001fb0210009c0000005c0000213d0000002002100039000000400020043f00000000000104350000000001010433000001e103000041000001e10410009c0000000001038019000001e10420009c000000000203801900000040022002100000006001100210000000000121019f0000077f0001042e000000400300043d000002030130009c0000005c0000213d0000006001300039000000400010043f0000004001300039000002040200004100000000002104350000002001300039000002050200004100000000002104350000002701000039000100000003001d00000000001304350000000001000414000000040260008c000001830000c13d00000001020000390000000103000031000001990000013d000001e1020000410000000205000029000001e10350009c0000000003020019000000000305401900000040033002100000000004040433000001e10540009c00000000040280190000006004400210000000000334019f000001e10410009c0000000001028019000000c001100210000000000113019f0000000002060019077e07790000040f000000010220018f00030000000103550000006001100270000101e10010019d000001e1031001970000006001000039000000000430004c000001c80000c13d0000000031010434000000000220004c000001f60000c13d000000000210004c0000021d0000c13d000000400100043d000001ef0200004100000000002104350000000402100039000000200300003900000000003204350000000102000029000000000202043300000024031000390000000000230435000000000320004c000001bb0000613d00000044031000390000000004000019000000010700002900000000053400190000002004400039000000000674001900000000060604330000000000650435000000000524004b000001b00000413d000000000424004b000001bb0000a13d000000000332001900000000000304350000001f02200039000000200300008a000000000232016f0000004402200039000001e103000041000001e10420009c0000000002038019000001e10410009c000000000103801900000040011002100000006002200210000000000112019f0000078000010430000001e60130009c0000005c0000213d0000003f01300039000000200400008a000000000441016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000001e60640009c0000005c0000213d00000001055001900000005c0000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f0000000506600272000001e60000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000001de0000413d000000000750004c0000019c0000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f00000000004304350000019c0000013d000000000110004c0000000402000029000001530000c13d000001ff0100004100000000001004390000000400200443000001e1010000410000000002000414000001e10320009c0000000001024019000000c00110021000000200011001c70000800202000039077e07740000040f00000001022001900000021b0000613d000000000101043b000000000110004c000001530000c13d000000400100043d00000044021000390000020603000041000000000032043500000024021000390000001d030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c0000000001028019000000400110021000000207011001c7000007800001043000000000010000190000078000010430000001e102000041000001e10430009c0000000003028019000001e10410009c000000000102801900000060011002100000004002300210000000000121019f0000078000010430000000000430004c000002340000613d000000000400001900000000052400190000000006140019000000000606043300000000006504350000002004400039000000000534004b000002290000413d000000000134004b000002340000a13d00000000012300190000000000010435000000000001042d0004000000000002000300000003001d000200000002001d000001ff020000410000000000200439000400000001001d0000000400100443000001e1010000410000000002000414000001e10320009c0000000001024019000000c00110021000000200011001c70000800202000039077e07740000040f0000000102200190000002f80000613d000000000101043b000000000110004c000003000000613d000001f401000041000000000201041a000001fa022001970000000405000029000001e503500197000000000232019f000000000021041b000000400100043d000001e1020000410000000003000414000001e10430009c0000000003028019000001e10410009c00000000010280190000004001100210000000c002300210000000000112019f00000201011001c70000800d0200003900000002030000390000020204000041077e076f0000040f0000000101200190000002f80000613d00000003050000290000000012050434000000000220004c000002d40000613d000000400a00043d0000020c02a0009c000002fa0000813d0000006002a00039000000400020043f0000004002a0003900000204030000410000000000320435000000270200003900000000032a04360000020502000041000100000003001d000000000023043500000000060004140000000402000029000000040320008c000002790000c13d000000010200003900000001030000310000028e0000013d000001e103000041000001e10410009c000000000103801900000040011002100000000004050433000001e10540009c00000000040380190000006004400210000000000114019f000001e10460009c0000000003064019000000c003300210000000000131019f00030000000a001d077e07790000040f000000030a000029000000010220018f00030000000103550000006001100270000101e10010019d000001e1031001970000006001000039000000000430004c000002be0000613d000001e60130009c000002fa0000213d0000003f01300039000000200400008a000000000441016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000001e60640009c000002fa0000213d0000000105500190000002fa0000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f0000000506600272000002af0000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000002a70000413d000000000750004c000002be0000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f00000000004304350000000031010434000000000220004c0000032a0000613d000000000110004c000002d40000c13d000001ff01000041000000000010043900000004010000290000000400100443000001e1010000410000000002000414000001e10320009c0000000001024019000000c00110021000000200011001c70000800202000039077e07740000040f0000000102200190000002f80000613d000000000101043b000000000110004c000003520000613d000001e801000041000000000301041a0000000201000029000001e504100197000000400100043d0000002002100039000400000004001d0000000000420435000300000003001d000001e5023001970000000000210435000001e1020000410000000003000414000001e10430009c0000000003028019000001e10410009c00000000010280190000004001100210000000c002300210000000000112019f000001f8011001c70000800d020000390000000103000039000001f904000041077e076f0000040f0000000101200190000002f80000613d0000000402000029000000000120004c000003150000613d0000000301000029000001fa01100197000000000121019f000001e802000041000000000012041b000000000001042d000000000100001900000780000104300000020a0100004100000000001004350000004101000039000000040010043f0000020b010000410000078000010430000000400100043d00000064021000390000020803000041000000000032043500000044021000390000020903000041000000000032043500000024021000390000002d030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c00000000010280190000004001100210000001fe011001c70000078000010430000000400100043d0000006402100039000001fc0300004100000000003204350000004402100039000001fd030000410000000000320435000000240210003900000026030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c00000000010280190000004001100210000001fe011001c70000078000010430000000000210004c000003490000c13d000000400400043d000400000004001d000001ef01000041000000000014043500000004014000390000002002000039000000000021043500000000030a0433000300000003001d0000002401400039000000000031043500000044024000390000000101000029077e02260000040f00000003010000290000001f01100039000000200200008a000000000121016f0000004401100039000001e102000041000001e10310009c00000000010280190000000404000029000001e10340009c000000000204401900000040022002100000006001100210000000000121019f0000078000010430000001e102000041000001e10430009c0000000003028019000001e10410009c000000000102801900000060011002100000004002300210000000000121019f0000078000010430000000400100043d00000044021000390000020603000041000000000032043500000024021000390000001d030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c0000000001028019000000400110021000000207011001c700000780000104300000008002100039000001f20300004100000000003204350000006002100039000001f10300004100000000003204350000004002100039000001f003000041000000000032043500000020021000390000004203000039000000000032043500000020020000390000000000210435000000a001100039000000000001042d0002000000000002000001e801000041000000000101041a000001e5011001970000000002000411000000000112004b000003820000c13d0000000201000367000000000101043b000001e901100197000001ea0210009c000003bf0000c13d077e04fe0000040f000003c20000013d000000020100036700000000040000310000001f0340018f000001f402000041000000000202041a000001e5022001970000000504400272000003920000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b0000038b0000413d000000000530004c000003a00000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000001000414000000040320008c000003cd0000c13d000000030100036700000001020000310000001f0320018f0000000502200272000003b00000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000524004b000003a90000413d000000000430004c000003f70000613d00000003033002100000000502200210000000000402043300000000043401cf000000000434022f000000000121034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000141019f0000000000120435000003f70000013d000001eb0210009c000003fd0000c13d077e06170000040f0000002002100039000001e103000041000001e10420009c00000000020380190000000001010433000001e10410009c000000000103801900000060011002100000004002200210000000000112019f0000077f0001042e000001e1030000410000000004000031000001e10540009c0000000004038019000001e10510009c0000000001038019000000c0011002100000006003400210000000000113019f077e07790000040f0003000000010355000000000301001900000060043002700000001f0340018f000101e10040019d000001e1044001970000000504400272000003e70000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000003e00000413d000000000530004c000003f50000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f000000000014043500000001012001900000043d0000613d000001e1010000410000000102000031000001e10320009c000000000102401900000060011002100000077f0001042e000001ec0210009c000004430000c13d0000000001000416000000000110004c0000046a0000c13d000001f6010000410000000001100031000001f70110009c0000046a0000413d00000004010000390000000201100367000000000301043b000001e50130009c0000046a0000213d000001e801000041000000000401041a000000400100043d00000020021000390000000000320435000100000004001d000001e5024001970000000000210435000001e102000041000200000003001d0000000003000414000001e10430009c0000000003028019000001e10410009c00000000010280190000004001100210000000c002300210000000000112019f000001f8011001c70000800d020000390000000103000039000001f904000041077e076f0000040f000000020300002900000001012001900000046a0000613d0000000102000029000000000130004c000004800000c13d000000400100043d0000006402100039000001fc0300004100000000003204350000004402100039000001fd030000410000000000320435000000240210003900000026030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c00000000010280190000004001100210000001fe011001c70000078000010430000001e1010000410000000102000031000001e10320009c000000000102401900000060011002100000078000010430000001ed0210009c000004550000c13d0000000001000416000000000110004c0000046a0000c13d000001e801000041000000000101041a000001e502100197000000400100043d0000002003100039000000000023043500000020020000390000000000210435000001f50210009c000004640000213d0000004002100039000000400020043f000003c20000013d000001ee0110009c0000046c0000c13d0000000001000416000000000110004c0000046a0000c13d000001f401000041000000000101041a000001e502100197000000400100043d00000020031000390000000000230435000000200200003900000000002104350000020d0210009c0000047d0000413d0000020a0100004100000000001004350000004101000039000000040010043f0000020b01000041000007800001043000000000010000190000078000010430000000400200043d000200000002001d000001ef0100004100000000001204350000000401200039077e03640000040f00000002040000290000000001410049000001e102000041000001e10310009c0000000001028019000001e10340009c000000000204401900000040022002100000006001100210000000000121019f00000780000104300000004002100039000000400020043f000003c20000013d000001fa01200197000000000131019f000001e802000041000000000012041b000000400100043d000001fb0210009c000004640000213d0000002002100039000000400020043f0000000000010435000003c20000013d000000020100036700000000040000310000001f0340018f000001f402000041000000000202041a000001e50220019700000005044002720000049b0000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000004940000413d000000000530004c000004a90000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000001000414000000040320008c000004c80000c13d000000030100036700000001020000310000001f0320018f0000000502200272000004b90000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000524004b000004b20000413d000000000430004c000004f20000613d00000003033002100000000502200210000000000402043300000000043401cf000000000434022f000000000121034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000141019f0000000000120435000004f20000013d000001e1030000410000000004000031000001e10540009c0000000004038019000001e10510009c0000000001038019000000c0011002100000006003400210000000000113019f077e07790000040f0003000000010355000000000301001900000060043002700000001f0340018f000101e10040019d000001e1044001970000000504400272000004e20000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000004db0000413d000000000530004c000004f00000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000101200190000004f80000613d000001e1010000410000000102000031000001e10320009c000000000102401900000060011002100000077f0001042e000001e1010000410000000102000031000001e10320009c00000000010240190000006001100210000007800001043000030000000000020000000001000416000000000110004c000005b80000c13d000001f6010000410000000001100031000001f70110009c000005b80000413d00000004010000390000000201100367000000000401043b000001e50140009c000005b80000213d000000400200043d0000020e0120009c000005ba0000813d0000002001200039000100000001001d000000400010043f000200000002001d0000000000020435000001ff0100004100000000001004390000000400400443000001e1010000410000000002000414000001e10320009c0000000001024019000000c00110021000000200011001c70000800202000039000300000004001d077e07740000040f00000003050000290000000102200190000005b80000613d000000000101043b000000000110004c000005c00000613d000001f401000041000000000201041a000001fa02200197000000000252019f000000000021041b000000400100043d000001e1020000410000000003000414000001e10430009c0000000003028019000001e10410009c00000000010280190000004001100210000000c002300210000000000112019f00000201011001c70000800d0200003900000002030000390000020204000041077e076f0000040f000000030a0000290000000101200190000005b80000613d00000002040000290000000001040433000000000110004c000005b10000613d000000400b00043d0000020301b0009c000005ba0000213d0000006001b00039000000400010043f0000004001b00039000002040200004100000000002104350000002001b0003900000205020000410000000000210435000000270100003900000000001b043500000000010004140000000402a0008c000005530000c13d000000010200003900000001030000310000056c0000013d000001e1020000410000000105000029000001e10350009c0000000003020019000000000305401900000040033002100000000004040433000001e10540009c00000000040280190000006004400210000000000334019f000001e10410009c0000000001028019000000c001100210000000000113019f00000000020a001900020000000b001d077e07790000040f000000020b000029000000030a000029000000010220018f00030000000103550000006001100270000101e10010019d000001e1031001970000006001000039000000000430004c0000059c0000613d000001e60130009c000005ba0000213d0000003f01300039000000200400008a000000000441016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000001e60640009c000005ba0000213d0000000105500190000005ba0000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f00000005066002720000058d0000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000005850000413d000000000750004c0000059c0000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f00000000004304350000000031010434000000000220004c000005d50000613d000000000110004c000005b10000c13d000001ff0100004100000000001004390000000400a00443000001e1010000410000000002000414000001e10320009c0000000001024019000000c00110021000000200011001c70000800202000039077e07740000040f0000000102200190000005b80000613d000000000101043b000000000110004c000006050000613d000000400100043d000001fb0210009c000005ba0000213d0000002002100039000000400020043f0000000000010435000000000001042d000000000100001900000780000104300000020a0100004100000000001004350000004101000039000000040010043f0000020b010000410000078000010430000000400100043d00000064021000390000020803000041000000000032043500000044021000390000020903000041000000000032043500000024021000390000002d030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c00000000010280190000004001100210000001fe011001c70000078000010430000000000210004c000005fc0000c13d000000400100043d000001ef02000041000000000021043500000004021000390000002003000039000000000032043500000000020b043300000024031000390000000000230435000000000320004c000005ef0000613d00000044031000390000000004000019000000000534001900000020044000390000000006b4001900000000060604330000000000650435000000000524004b000005e40000413d000000000424004b000005ef0000a13d000000000332001900000000000304350000001f02200039000000200300008a000000000232016f0000004402200039000001e103000041000001e10420009c0000000002038019000001e10410009c000000000103801900000040011002100000006002200210000000000112019f0000078000010430000001e102000041000001e10430009c0000000003028019000001e10410009c000000000102801900000060011002100000004002300210000000000121019f0000078000010430000000400100043d00000044021000390000020603000041000000000032043500000024021000390000001d030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c0000000001028019000000400110021000000207011001c7000007800001043000040000000000020000000003000031000001f6013000410000020f0110009c000007100000a13d00000002010003670000000402100370000000000202043b000400000002001d000001e50220009c000007100000213d0000002402100370000000000202043b000001e60420009c000007100000213d0000002304200039000001e405000041000000000634004b00000000060000190000000006058019000001e403300197000001e404400197000000000734004b0000000005008019000000000334013f000001e40330009c00000000030600190000000003056019000000000330004c000007100000c13d0000000403200039000000000131034f000000000101043b000002100310009c000007120000813d0000003f03100039000000200400008a000100000004001d000000000343016f000000400600043d0000000003360019000000000463004b00000000040000190000000104004039000001e60530009c000007120000213d0000000104400190000007120000c13d000000400030043f000200000006001d0000000003160436000300000003001d000000240320003900000000021300190000000004000031000000000242004b000007100000213d0000001f0210018f0000000203300367000000050410027200000003080000290000065e0000613d000000000500001900000005065002100000000007680019000000000663034f000000000606043b00000000006704350000000105500039000000000645004b000006560000413d000000000520004c0000066d0000613d0000000504400210000000000343034f00000000044800190000000302200210000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f000000000024043500000000011800190000000000010435000001ff01000041000000000010043900000004010000290000000400100443000001e1010000410000000002000414000001e10320009c0000000001024019000000c00110021000000200011001c70000800202000039077e07740000040f0000000102200190000007100000613d000000000101043b000000000110004c000007180000613d000001f401000041000000000201041a000001fa022001970000000405000029000000000252019f000000000021041b000000400100043d000001e1020000410000000003000414000001e10430009c0000000003028019000001e10410009c00000000010280190000004001100210000000c002300210000000000112019f00000201011001c70000800d0200003900000002030000390000020204000041077e076f0000040f0000000101200190000007100000613d000000400a00043d0000020301a0009c0000000204000029000007120000213d0000006001a00039000000400010043f0000004001a00039000002040200004100000000002104350000002001a0003900000205020000410000000000210435000000270100003900000000001a043500000000010004140000000402000029000000040320008c000006ac0000c13d00000001020000390000000103000031000006c30000013d000001e1060000410000000305000029000001e10350009c0000000003060019000000000305401900000040033002100000000004040433000001e10540009c00000000040680190000006004400210000000000334019f000001e10410009c0000000001068019000000c001100210000000000113019f00030000000a001d077e07790000040f000000030a000029000000010220018f00030000000103550000006001100270000101e10010019d000001e1031001970000006001000039000000000430004c000006f30000613d000001e60130009c000007120000213d0000003f013000390000000104000029000000000441016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000001e60640009c000007120000213d0000000105500190000007120000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f0000000506600272000006e40000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000006dc0000413d000000000750004c000006f30000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f00000000004304350000000031010434000000000220004c0000072d0000613d000000000110004c0000000402000029000007090000c13d000001ff0100004100000000001004390000000400200443000001e1010000410000000002000414000001e10320009c0000000001024019000000c00110021000000200011001c70000800202000039077e07740000040f0000000102200190000007100000613d000000000101043b000000000110004c0000075d0000613d000000400100043d000001fb0210009c000007120000213d0000002002100039000000400020043f0000000000010435000000000001042d000000000100001900000780000104300000020a0100004100000000001004350000004101000039000000040010043f0000020b010000410000078000010430000000400100043d00000064021000390000020803000041000000000032043500000044021000390000020903000041000000000032043500000024021000390000002d030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c00000000010280190000004001100210000001fe011001c70000078000010430000000000210004c000007540000c13d000000400100043d000001ef02000041000000000021043500000004021000390000002003000039000000000032043500000000020a043300000024031000390000000000230435000000000320004c000007470000613d00000044031000390000000004000019000000000534001900000020044000390000000006a4001900000000060604330000000000650435000000000524004b0000073c0000413d000000000424004b000007470000a13d000000000332001900000000000304350000001f022000390000000103000029000000000232016f0000004402200039000001e103000041000001e10420009c0000000002038019000001e10410009c000000000103801900000040011002100000006002200210000000000112019f0000078000010430000001e102000041000001e10430009c0000000003028019000001e10410009c000000000102801900000060011002100000004002300210000000000121019f0000078000010430000000400100043d00000044021000390000020603000041000000000032043500000024021000390000001d030000390000000000320435000001ef020000410000000000210435000000040210003900000020030000390000000000320435000001e102000041000001e10310009c0000000001028019000000400110021000000207011001c7000007800001043000000772002104210000000102000039000000000001042d0000000002000019000000000001042d00000777002104230000000102000039000000000001042d0000000002000019000000000001042d0000077c002104250000000102000039000000000001042d0000000002000019000000000001042d0000077e000004320000077f0001042e000007800001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff000000000000007f8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffff0000000200000000000000000000000000000040000001000000000000000000b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103ffffffff000000000000000000000000000000000000000000000000000000003659cfe6000000000000000000000000000000000000000000000000000000004f1ef286000000000000000000000000000000000000000000000000000000008f28397000000000000000000000000000000000000000000000000000000000f851a440000000000000000000000000000000000000000000000000000000005c60da1b0000000000000000000000000000000000000000000000000000000008c379a0000000000000000000000000000000000000000000000000000000005472616e73706172656e745570677261646561626c6550726f78793a2061646d696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267657400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a4000000800000000000000000360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc000000000000000000000000000000000000000000000000ffffffffffffffbf7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc800000000000000000000000000000000000000000000000000000000000002002000000000000000000000000000000000000400000000000000000000000007e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798fffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffdf6464726573730000000000000000000000000000000000000000000000000000455243313936373a206e65772061646d696e20697320746865207a65726f206100000000000000000000000000000000000000840000000000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b8302000002000000000000000000000000000000240000000000000000000000000200000000000000000000000000000000000000000000000000000000000000bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b000000000000000000000000000000000000000000000000ffffffffffffff9f206661696c656400000000000000000000000000000000000000000000000000416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000000000000000000000000000000000000000000640000000000000000000000006f74206120636f6e747261637400000000000000000000000000000000000000455243313936373a206e657720696d706c656d656e746174696f6e206973206e4e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffa0000000000000000000000000000000000000000000000000ffffffffffffffc0000000000000000000000000000000000000000000000000ffffffffffffffe0800000000000000000000000000000000000000000000000000000000000003f000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000adcee3b43cc4c20684230c369da2bffe2e776f4617aac8f1a65942a16f8ed6d";
var TransparentUpgradeableProxy__factory = exports.TransparentUpgradeableProxy__factory = /** @class */ (function (_super) {
    __extends(TransparentUpgradeableProxy__factory, _super);
    function TransparentUpgradeableProxy__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    TransparentUpgradeableProxy__factory.prototype.deploy = function (_logic, admin_, _data, overrides) {
        return _super.prototype.deploy.call(this, _logic, admin_, _data, overrides || {});
    };
    TransparentUpgradeableProxy__factory.prototype.getDeployTransaction = function (_logic, admin_, _data, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _logic, admin_, _data, overrides || {});
    };
    TransparentUpgradeableProxy__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TransparentUpgradeableProxy__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TransparentUpgradeableProxy__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TransparentUpgradeableProxy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TransparentUpgradeableProxy__factory.bytecode = _bytecode;
    TransparentUpgradeableProxy__factory.abi = _abi;
    return TransparentUpgradeableProxy__factory;
}(ethers_1.ContractFactory));