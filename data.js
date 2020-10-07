var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.006309573148545411,
        "pitch": 0,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.2135682698165695,
          "pitch": 0.4174437597281191,
          "rotation": 1.5707963267948966,
          "target": "1-kitchen"
        },
        {
          "yaw": 0.03259219389110157,
          "pitch": 0.2801198395170701,
          "rotation": 0,
          "target": "2-family-room"
        },
        {
          "yaw": 1.5223008559366544,
          "pitch": 0.3054033624224175,
          "rotation": 0,
          "target": "4-bathroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6560881736361228,
          "pitch": 0.42856090418922577,
          "rotation": 0,
          "target": "2-family-room"
        },
        {
          "yaw": -2.9859268380562813,
          "pitch": 0.32160315606737555,
          "rotation": 4.71238898038469,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-family-room",
      "name": "Family Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3985221060302457,
          "pitch": 0.20683129460058503,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.804329700291138,
          "pitch": 0.23774998865045127,
          "rotation": 11.780972450961727,
          "target": "0-entrance"
        },
        {
          "yaw": 0.19511965398645614,
          "pitch": -0.02374565837214604,
          "rotation": 7.0685834705770345,
          "target": "5-stairs"
        },
        {
          "yaw": -0.05286622847632927,
          "pitch": 0.1682195570990057,
          "rotation": 5.497787143782138,
          "target": "3-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-garage",
      "name": "Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1705309871095118,
          "pitch": 0.363678546989636,
          "rotation": 0,
          "target": "2-family-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0693948333371655,
          "pitch": 0.2922931881141988,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3581817380464827,
          "pitch": 1.0360006649893148,
          "rotation": 10.995574287564278,
          "target": "2-family-room"
        },
        {
          "yaw": -0.046866738808990505,
          "pitch": 0.9002295442215082,
          "rotation": 0,
          "target": "3-garage"
        },
        {
          "yaw": -0.7764600555306806,
          "pitch": 0.39209789867920897,
          "rotation": 5.497787143782138,
          "target": "13-loft"
        },
        {
          "yaw": -0.41643393803616746,
          "pitch": 0.28909849044478086,
          "rotation": 0,
          "target": "6-bedroom-1---master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-1---master",
      "name": "Bedroom 1 - Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.593189801266174,
          "pitch": 0.4177529197469294,
          "rotation": 0,
          "target": "7-bathroom-2---master"
        },
        {
          "yaw": 2.7178639797297794,
          "pitch": 0.34077869669922833,
          "rotation": 0,
          "target": "13-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom-2---master",
      "name": "Bathroom 2 - Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6680209591097377,
          "pitch": 0.3082831030437241,
          "rotation": 4.71238898038469,
          "target": "6-bedroom-1---master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0297884992612385,
          "pitch": 0.358317164086678,
          "rotation": 0,
          "target": "9-bedroom-3"
        },
        {
          "yaw": -0.002034985127073341,
          "pitch": 0.44132437513124323,
          "rotation": 0,
          "target": "11-bathroom-3"
        },
        {
          "yaw": 1.0188082336693718,
          "pitch": 0.36785462246608525,
          "rotation": 0,
          "target": "10-bedroom-2"
        },
        {
          "yaw": 2.3391232298702436,
          "pitch": 0.5235493087177474,
          "rotation": 5.497787143782138,
          "target": "12-laundry-room"
        },
        {
          "yaw": 3.035506232125827,
          "pitch": 0.43733522093967636,
          "rotation": 0.7853981633974483,
          "target": "13-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.48360485431672195,
          "pitch": 0.30404838389731736,
          "rotation": 6.283185307179586,
          "target": "8-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.700167129865836,
          "pitch": 0.4292928913790135,
          "rotation": 0,
          "target": "8-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bathroom-3",
      "name": "Bathroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9367398750850953,
          "pitch": 0.44842188520522797,
          "rotation": 0,
          "target": "8-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-laundry-room",
      "name": "Laundry Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6199098517724426,
          "pitch": 0.3857866752734793,
          "rotation": 1.5707963267948966,
          "target": "8-hallway"
        },
        {
          "yaw": -3.113616561564216,
          "pitch": 0.47738423201800373,
          "rotation": 4.71238898038469,
          "target": "13-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-loft",
      "name": "Loft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.40194166461675,
          "pitch": 0.3986490427720746,
          "rotation": 0,
          "target": "8-hallway"
        },
        {
          "yaw": -0.4217631245924771,
          "pitch": 0.23074063501151443,
          "rotation": 2.356194490192345,
          "target": "5-stairs"
        },
        {
          "yaw": -1.174663025909668,
          "pitch": 0.30890669092578094,
          "rotation": 4.71238898038469,
          "target": "6-bedroom-1---master"
        },
        {
          "yaw": 2.792469518303739,
          "pitch": 0.38022235199776055,
          "rotation": 1.5707963267948966,
          "target": "12-laundry-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Corey's House",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
