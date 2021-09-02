var debug = require('debug')('NetFlowV9');
var IpfixDeserializer = require('ipfix_node')();
// var nfTyps = require('./ipfix-data-entities.json');
var nfTyps = require('./nftypes').nfTypes;

// var fs = require('fs');
// var entities = JSON.parse(fs.readFileSync('./ipfix-data-entities.json', 'utf8'));

async function nf10PktDecode(msg, rinfo) {

    let decoded;
    try {
        decoded = await IpfixDeserializer.deserialize(msg);
    } catch (err) {
        console.log(err);
        return;
    }

    const entities = decoded && decoded.DataSets && decoded.DataSets[0] && decoded.DataSets[0].Fields;
    if (!entities || !entities.length) { debug(`bad entities ${JSON.stringify(decoded, null, 1)}`); return; }

    // const result = entities.reduce((acc, cur) => (acc[nfTyps[cur.fieldId].Name] = cur.fieldValueParsed, acc),{})
    const result = entities.reduce((acc, cur) => (acc[nfTyps[cur.fieldId].name] = cur.fieldValueParsed, acc),{})
    // entities.forEach(entity => entity.name = nfTyps[entity.fieldId].name);
    console.log(result);
    return entities;
}

module.exports = nf10PktDecode;
const v9 = {
    last_switched: 91457610,
    first_switched: 91264770,
    in_pkts: 326,
    in_bytes: 475665,
    input_snmp: 2,
    output_snmp: 4,
    ipv4_src_addr: '10.10.116.3',
    ipv4_dst_addr: '89.233.238.107',
    protocol: 6,
    src_tos: 0,
    l4_src_port: 80,
    l4_dst_port: 56447,
    ipv4_next_hop: '213.21.96.129',
    dst_mask: 0,
    src_mask: 0,
    tcp_flags: 16,
    in_dst_mac: '005056909e2f',
    in_src_mac: '005056909e2f',
    out_dst_mac: 'ac1f6ba4caf1',
    out_src_mac: '00505690f83b',
    postNATSourceIPv4Address: '213.21.96.181',
    postNATDestinationIPv4Address: '89.233.238.107',
    postNAPTSourceTransportPort: 80,
    postNAPTDestinationTransportPort: 56447,
    fsId: 256
}

const v10 = {
    ip_protocol_version: '95',
    first_switched: '2281242624',
    last_switched: '61690',
    systemInitTimeMilliseconds: '195887433482',
    in_pkts: '174931640',
    in_bytes: '4228726020',
    l4_src_port: '1385',
    l4_dst_port: '61300',
    input_snmp: '90828660',
    output_snmp: '379',
    protocol: '160',
    src_tos: '244',
    tcp_flags: '32',
    out_dst_mac: undefined,
    in_dst_mac: undefined,
    out_src_mac: undefined,
    in_src_mac: undefined,
    ipv4_src_addr: '0.80.86.144',
    ipv4_dst_addr: '248.59.0.80',
    ipv4_next_hop: '86.144.248.59',
    src_mask: '0',
    dst_mask: '80',
    ipTTL: '96',
    isMulticast: '152',
    ipHeaderLength: '8',
    ipTotalLength: '578722263396811008',
    udpMessageLength: '64',
    tcpSequenceNumber: '327680',
    tcpAcknowledgementNumber: '0',
    tcpWindowSize: '66',
    mul_igmp_type: '0',
    icmpTypeIPv4: '54',
    icmpCodeIPv4: '0',
    postNATSourceIPv4Address: '5.0.0.0',
    postNATDestinationIPv4Address: '0.0.0.0',
    postNAPTSourceTransportPort: '15360',
    postNAPTDestinationTransportPort: '221',
    exportSctpStreamId: undefined,
    ipv6_src_addr: '0a00:0000:0100:0000:4287:0600:3500:0000',
    ipv6_dst_addr: '0000:0000:0411:0000:0000:0000:0000:0000',
    ipv6_next_hop: '0000:0000:0050:5690:f83b:0000:0000:0000',
    ipv6_src_mask: '213',
    ipv6_dst_mask: '21',
    icmpTypeIPv6: '46',
    icmpCodeIPv6: '0',
    ipv6_flow_label: '0'
}




const res = {
    "Header": {
        "Version": 10,
        "FlowLengthBytes": 1412,
        "ExportTime": 1630566971000,
        "SequenceNumber": 13167030,
        "ObservationDomainId": 0,
        "sizeInBytes": 16
    },
    "TemplateSets": [],
    "OptionsTemplateSets": [],
    "DataSets": [
        {
            "templateId": 258,
            "Fields": [
                {
                    "fieldId": 60,
                    "fieldValue": "4",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "4"
                },
                {
                    "fieldId": 22,
                    "fieldValue": "73997080",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "73997080"
                },
                {
                    "fieldId": 21,
                    "fieldValue": "73997080",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "73997080"
                },
                {
                    "fieldId": 160,
                    "fieldValue": "1630492958740",
                    "sizeInBytes": 8,
                    "fieldValueParsed": "1630492958740"
                },
                {
                    "fieldId": 2,
                    "fieldValue": "25",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "25"
                },
                {
                    "fieldId": 1,
                    "fieldValue": "3686",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "3686"
                },
                {
                    "fieldId": 7,
                    "fieldValue": "45090",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "45090"
                },
                {
                    "fieldId": 11,
                    "fieldValue": "443",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "443"
                },
                {
                    "fieldId": 10,
                    "fieldValue": "3",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "3"
                },
                {
                    "fieldId": 14,
                    "fieldValue": "1",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "1"
                },
                {
                    "fieldId": 4,
                    "fieldValue": "6",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "6"
                },
                {
                    "fieldId": 5,
                    "fieldValue": "0",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "0"
                },
                {
                    "fieldId": 6,
                    "fieldValue": "2",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "2"
                },
                {
                    "fieldId": 57
                },
                {
                    "fieldId": 80
                },
                {
                    "fieldId": 81
                },
                {
                    "fieldId": 56
                },
                {
                    "fieldId": 8,
                    "fieldValue": "5265040",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "0.80.86.144"
                },
                {
                    "fieldId": 12,
                    "fieldValue": "2373386320",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "141.119.0.80"
                },
                {
                    "fieldId": 15,
                    "fieldValue": "1452313975",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "86.144.141.119"
                },
                {
                    "fieldId": 9,
                    "fieldValue": "0",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "0"
                },
                {
                    "fieldId": 13,
                    "fieldValue": "80",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "80"
                },
                {
                    "fieldId": 192,
                    "fieldValue": "86",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "86"
                },
                {
                    "fieldId": 206,
                    "fieldValue": "144",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "144"
                },
                {
                    "fieldId": 189,
                    "fieldValue": "224",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "224"
                },
                {
                    "fieldId": 224,
                    "fieldValue": "14409854415400239114",
                    "sizeInBytes": 8,
                    "fieldValueParsed": "14409854415400239114"
                },
                {
                    "fieldId": 205,
                    "fieldValue": "2671",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "2671"
                },
                {
                    "fieldId": 184,
                    "fieldValue": "3151304032",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "3151304032"
                },
                {
                    "fieldId": 185,
                    "fieldValue": "3020556896",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "3020556896"
                },
                {
                    "fieldId": 186,
                    "fieldValue": "22528",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "22528"
                },
                {
                    "fieldId": 33,
                    "fieldValue": "0",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "0"
                },
                {
                    "fieldId": 176,
                    "fieldValue": "62",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "62"
                },
                {
                    "fieldId": 177,
                    "fieldValue": "0",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "0"
                },
                {
                    "fieldId": 225,
                    "fieldValue": "83886080",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "5.0.0.0"
                },
                {
                    "fieldId": 226,
                    "fieldValue": "0",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "0.0.0.0"
                },
                {
                    "fieldId": 227,
                    "fieldValue": "15360",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "15360"
                },
                {
                    "fieldId": 228,
                    "fieldValue": "136",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "136"
                },
                {
                    "fieldId": 259
                },
                {
                    "fieldId": 60,
                    "fieldValue": "101",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "101"
                },
                {
                    "fieldId": 22,
                    "fieldValue": "4086497280",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "4086497280"
                },
                {
                    "fieldId": 21,
                    "fieldValue": "61690",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "61690"
                },
                {
                    "fieldId": 160,
                    "fieldValue": "43124767498",
                    "sizeInBytes": 8,
                    "fieldValueParsed": "43124767498"
                },
                {
                    "fieldId": 2,
                    "fieldValue": "174086320",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "174086320"
                },
                {
                    "fieldId": 1,
                    "fieldValue": "570538756",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "570538756"
                },
                {
                    "fieldId": 7,
                    "fieldValue": "1129",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "1129"
                },
                {
                    "fieldId": 11,
                    "fieldValue": "6936",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "6936"
                },
                {
                    "fieldId": 10,
                    "fieldValue": "73997080",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "73997080"
                },
                {
                    "fieldId": 14,
                    "fieldValue": "379",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "379"
                },
                {
                    "fieldId": 4,
                    "fieldValue": "160",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "160"
                },
                {
                    "fieldId": 5,
                    "fieldValue": "244",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "244"
                },
                {
                    "fieldId": 6,
                    "fieldValue": "32",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "32"
                },
                {
                    "fieldId": 57
                },
                {
                    "fieldId": 80
                },
                {
                    "fieldId": 81
                },
                {
                    "fieldId": 56
                },
                {
                    "fieldId": 27,
                    "sizeInBytes": 16,
                    "fieldValueParsed": "1400:0000:1b00:03e0:9001:bbb0:1800:0000"
                },
                {
                    "fieldId": 28,
                    "sizeInBytes": 16,
                    "fieldValueParsed": "0100:0000:0306:0012:0050:5690:e0c7:0050"
                },
                {
                    "fieldId": 62,
                    "sizeInBytes": 16,
                    "fieldValueParsed": "5690:e0c7:0050:5690:8d77:0050:5690:4559"
                },
                {
                    "fieldId": 29,
                    "fieldValue": "10",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "10"
                },
                {
                    "fieldId": 30,
                    "fieldValue": "10",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "10"
                },
                {
                    "fieldId": 192,
                    "fieldValue": "96",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "96"
                },
                {
                    "fieldId": 206,
                    "fieldValue": "88",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "88"
                },
                {
                    "fieldId": 189,
                    "fieldValue": "10",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "10"
                },
                {
                    "fieldId": 224,
                    "fieldValue": "752025314593323776",
                    "sizeInBytes": 8,
                    "fieldValueParsed": "752025314593323776"
                },
                {
                    "fieldId": 205,
                    "fieldValue": "62",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "62"
                },
                {
                    "fieldId": 184,
                    "fieldValue": "327680",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "327680"
                },
                {
                    "fieldId": 185,
                    "fieldValue": "0",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "0"
                },
                {
                    "fieldId": 186,
                    "fieldValue": "60",
                    "sizeInBytes": 2,
                    "fieldValueParsed": "60"
                },
                {
                    "fieldId": 33,
                    "fieldValue": "0",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "0"
                },
                {
                    "fieldId": 178,
                    "fieldValue": "0",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "0"
                },
                {
                    "fieldId": 179,
                    "fieldValue": "124",
                    "sizeInBytes": 1,
                    "fieldValueParsed": "124"
                },
                {
                    "fieldId": 31,
                    "fieldValue": "3700191636",
                    "sizeInBytes": 4,
                    "fieldValueParsed": "3700191636"
                }
            ]
        }
    ]
}