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
exports.ERC1967Proxy__factory = void 0;
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
var _bytecode = "0x00040000000000020002000000000002000000000301001900000060033002700000008d04300197000300000041035500020000000103550000008d0030019d000100000000001f0000008001000039000000400010043f00000000030000310000000101200190000000410000c13d0000009601000041000000000101041a0000009102100197000000000130004c0000004d0000c13d0000000001000414000000040320008c0000006a0000613d0000008d0300004100000000040000310000008d0540009c00000000040380190000008d0510009c0000000001038019000000c0011002100000006003400210000000000113019f022d02280000040f0003000000010355000000000301001900000060043002700000001f0340018f0001008d0040019d0000008d044001970000000504400272000000300000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000000290000413d000000000530004c0000003e0000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000101200190000001050000c13d000001080000013d0000009f02300039000000200100008a000000000212016f0000008e042000410000008f0440009c000000860000213d000000940100004100000000001004350000004101000039000000040010043f00000095010000410000022f0001043000000002010003670000001f0430018f0000000503300272000000590000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000635004b000000520000413d000000000540004c000000670000613d00000003044002100000000503300210000000000503043300000000054501cf000000000545022f000000000131034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000151019f00000000001304350000000001000414000000040320008c000000db0000c13d000000030100036700000001020000310000001f0320018f0000000502200272000000770000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000524004b000000700000413d000000000430004c000001050000613d00000003033002100000000502200210000000000402043300000000043401cf000000000434022f000000000121034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000141019f0000000000120435000001050000013d000000400020043f0000001f0230018f00000002040003670000000505300272000000940000613d00000000060000190000000507600210000000000874034f000000000808043b000000800770003900000000008704350000000106600039000000000756004b0000008c0000413d000000000620004c000000a30000613d0000000505500210000000000454034f00000003022002100000008005500039000000000605043300000000062601cf000000000626022f000000000404043b0000010002200089000000000424022f00000000022401cf000000000262019f000000000025043500000090020000410000003f0430008c000000000400001900000000040220190000009005300197000000000650004c0000000002008019000000900550009c000000000204c019000000000220004c000000d90000613d000000800900043d000000910290009c000000d90000213d000000a00400043d000000920240009c000000d90000213d00000080053000390000009f024000390000009003000041000000000652004b0000000006000019000000000603801900000090075001970000009002200197000000000872004b0000000003008019000000000272013f000000900220009c00000000020600190000000002036019000000000220004c000000d90000c13d00000080024000390000000003020433000000920230009c000000470000213d0000003f02300039000000000112016f000000400700043d0000000001170019000000000271004b00000000020000190000000102004039000000920610009c000000470000213d0000000102200190000000470000c13d000000400010043f0000000002370436000000a0014000390000000004130019000000000454004b0000010e0000a13d00000000010000190000022f000104300000008d0300004100000000040000310000008d0540009c00000000040380190000008d0510009c0000000001038019000000c0011002100000006003400210000000000113019f022d02280000040f0003000000010355000000000301001900000060043002700000001f0340018f0001008d0040019d0000008d044001970000000504400272000000f50000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000000ee0000413d000000000530004c000001030000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000101200190000001080000613d000000600100003900000001011001ff0000022e0001042e0000008d0100004100000001020000310000008d0320009c000000000102401900000060011002100000022f00010430000100000009001d000200000007001d022d01190000040f00000001010000290000000202000029022d01280000040f00000020010000390000010000100443000001200000044300000093010000410000022e0001042e000000000430004c000001270000613d000000000400001900000000052400190000000006140019000000000606043300000000006504350000002004400039000000000534004b0000011c0000413d000000000134004b000001270000a13d00000000012300190000000000010435000000000001042d0003000000000002000200000002001d00000097020000410000000000200439000300000001001d00000004001004430000008d0100004100000000020004140000008d0320009c0000000001024019000000c00110021000000098011001c70000800202000039022d02230000040f0000000102200190000001c70000613d000000000101043b000000000110004c000001cf0000613d0000009601000041000000000201041a000000990220019700000003050000290000009103500197000000000232019f000000000021041b000000400100043d0000008d0200004100000000030004140000008d0430009c00000000030280190000008d0410009c00000000010280190000004001100210000000c002300210000000000112019f0000009a011001c70000800d0200003900000002030000390000009b04000041022d021e0000040f0000000101200190000001c70000613d00000002050000290000000012050434000000000220004c000001c60000613d000000400a00043d0000009c02a0009c000001c90000813d0000006002a00039000000400020043f0000004002a000390000009d030000410000000000320435000000270200003900000000032a04360000009e02000041000100000003001d000000000023043500000000060004140000000302000029000000040320008c0000016b0000c13d00000001020000390000000103000031000001800000013d0000008d030000410000008d0410009c0000000001038019000000400110021000000000040504330000008d0540009c00000000040380190000006004400210000000000114019f0000008d0460009c0000000003064019000000c003300210000000000131019f00020000000a001d022d02280000040f000000020a000029000000010220018f000300000001035500000060011002700001008d0010019d0000008d031001970000006001000039000000000430004c000001b00000613d000000920130009c000001c90000213d0000003f01300039000000200400008a000000000441016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000000920640009c000001c90000213d0000000105500190000001c90000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f0000000506600272000001a10000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000001990000413d000000000750004c000001b00000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f00000000004304350000000031010434000000000220004c000001e40000613d000000000110004c000001c60000c13d00000097010000410000000000100439000000030100002900000004001004430000008d0100004100000000020004140000008d0320009c0000000001024019000000c00110021000000098011001c70000800202000039022d02230000040f0000000102200190000001c70000613d000000000101043b000000000110004c0000020c0000613d000000000001042d00000000010000190000022f00010430000000940100004100000000001004350000004101000039000000040010043f00000095010000410000022f00010430000000400100043d0000006402100039000000a20300004100000000003204350000004402100039000000a303000041000000000032043500000024021000390000002d030000390000000000320435000000a00200004100000000002104350000000402100039000000200300003900000000003204350000008d020000410000008d0310009c00000000010280190000004001100210000000a4011001c70000022f00010430000000000210004c000002030000c13d000000400400043d000300000004001d000000a001000041000000000014043500000004014000390000002002000039000000000021043500000000030a0433000200000003001d0000002401400039000000000031043500000044024000390000000101000029022d01190000040f00000002010000290000001f01100039000000200200008a000000000121016f00000044011000390000008d020000410000008d0310009c000000000102801900000003040000290000008d0340009c000000000204401900000040022002100000006001100210000000000121019f0000022f000104300000008d020000410000008d0430009c00000000030280190000008d0410009c000000000102801900000060011002100000004002300210000000000121019f0000022f00010430000000400100043d00000044021000390000009f03000041000000000032043500000024021000390000001d030000390000000000320435000000a00200004100000000002104350000000402100039000000200300003900000000003204350000008d020000410000008d0310009c00000000010280190000004001100210000000a1011001c70000022f0001043000000221002104210000000102000039000000000001042d0000000002000019000000000001042d00000226002104230000000102000039000000000001042d0000000002000019000000000001042d0000022b002104250000000102000039000000000001042d0000000002000019000000000001042d0000022d000004320000022e0001042e0000022f00010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff000000000000007f8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffff00000002000000000000000000000000000000400000010000000000000000004e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc1806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b830200000200000000000000000000000000000024000000000000000000000000ffffffffffffffffffffffff00000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b000000000000000000000000000000000000000000000000ffffffffffffffa0206661696c656400000000000000000000000000000000000000000000000000416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000008c379a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000640000000000000000000000006f74206120636f6e747261637400000000000000000000000000000000000000455243313936373a206e657720696d706c656d656e746174696f6e206973206e0000000000000000000000000000000000000084000000000000000000000000000000000000000000000000000000000000000000000000000000000000000096818b67ea07d09de818b0fb13dcb1efe7317d5a9ac77f000c3cadb83b76ef8a";
var ERC1967Proxy__factory = exports.ERC1967Proxy__factory = /** @class */ (function (_super) {
    __extends(ERC1967Proxy__factory, _super);
    function ERC1967Proxy__factory() {
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
    ERC1967Proxy__factory.prototype.deploy = function (_logic, _data, overrides) {
        return _super.prototype.deploy.call(this, _logic, _data, overrides || {});
    };
    ERC1967Proxy__factory.prototype.getDeployTransaction = function (_logic, _data, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _logic, _data, overrides || {});
    };
    ERC1967Proxy__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC1967Proxy__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC1967Proxy__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC1967Proxy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC1967Proxy__factory.bytecode = _bytecode;
    ERC1967Proxy__factory.abi = _abi;
    return ERC1967Proxy__factory;
}(ethers_1.ContractFactory));
