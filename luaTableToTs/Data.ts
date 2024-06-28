import { v2, size, Size, Vec2 } from 'cc';


export interface LevelData {
    player: { position: Vec2 };
    goal: { position: Vec2 };
    gravityUp: any[];
    gravityDown: any[];
    reverse: any[];
    block: { position: Vec2, size: Size }[];
    moveBlock: any[];
    cube: { position: Vec2 }[];
    hole: any[];
    needle: any[];
}


// 定义整个关卡的数据结构
export const LevelList = [
    // 1
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(362, 489), size: size(42, 18) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(575, 182), size: size(86, 44) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 2
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [
                { position: v2(570, 495) },
            ],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(375, 336), size: size(66, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(625, 169), size: size(42, 18) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 3
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(355, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(422, 502), size: size(84, 44) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(758, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(805, 365), size: size(45, 90) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 4
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(455, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(408, 502), size: size(44, 44) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(305, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(645, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(601, 182), size: size(38, 44) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 5
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(750, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(225, 502), size: size(44, 44) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(850, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(575, 410), size: size(34, 80) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],

    ///////////////// 5 end /////////////////////

    // Level 6
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [{ position: v2(485, 486), number: 2, gravityReverse: false }]
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(575, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [{ position: v2(640, 342), size: size(80, 44) }],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(825, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [{ position: v2(300, 250), size: size(34, 80) }],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // Level 7
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [{ position: v2(335, 502), size: size(80, 44) }],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(130, 486), number: 2, gravityReverse: false },
                { position: v2(545, 486), number: 2, gravityReverse: false },
            ]
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [{ position: v2(455, 342), size: size(80, 44) }],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(250, 326), number: 2, gravityReverse: false },
                { position: v2(665, 326), number: 2, gravityReverse: false },
            ]
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [{ position: v2(575, 182), size: size(80, 44) }],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(370, 166), number: 2, gravityReverse: false },
                { position: v2(785, 166), number: 2, gravityReverse: false },
            ]
        }
    ],
    // Level 8
    [
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(565, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [{ position: v2(630, 502), size: size(80, 44) }],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(260, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [{ position: v2(940, 340) }],
            block: [{ position: v2(195, 342), size: size(80, 44) }],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [{ position: v2(680, 166), number: 2, gravityReverse: false }]
        }
    ],
    // Level 9
    [
        // 1
        {
            player: { position: v2(50, 490) },
            goal: { position: v2(645, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(120, 486), size: size(80, 12) },
                { position: v2(248, 494), size: size(80, 28) },
                { position: v2(376, 505), size: size(80, 50) },
                { position: v2(504, 512), size: size(80, 65) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(184, 486), number: 4, gravityReverse: false },
                { position: v2(312, 486), number: 4, gravityReverse: false },
                { position: v2(440, 486), number: 4, gravityReverse: false },
                { position: v2(940, 486), number: 2, gravityReverse: false },
            ]
        },
        // 2
        {
            player: { position: v2(50, 330) },
            goal: { position: v2(745, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(220, 326), size: size(80, 12) },
                { position: v2(348, 334), size: size(80, 28) },
                { position: v2(476, 345), size: size(80, 50) },
                { position: v2(604, 352), size: size(80, 65) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(284, 326), number: 4, gravityReverse: false },
                { position: v2(412, 326), number: 4, gravityReverse: false },
                { position: v2(540, 326), number: 4, gravityReverse: false },
                { position: v2(940, 326), number: 2, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(50, 170) },
            goal: { position: v2(845, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(320, 166), size: size(80, 12) },
                { position: v2(448, 174), size: size(80, 28) },
                { position: v2(576, 185), size: size(80, 50) },
                { position: v2(704, 192), size: size(80, 65) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(384, 166), number: 4, gravityReverse: false },
                { position: v2(512, 166), number: 4, gravityReverse: false },
                { position: v2(640, 166), number: 4, gravityReverse: false },
                { position: v2(940, 166), number: 2, gravityReverse: false },
            ]
        }
    ],
    // Level 10
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(450, 500) },
            gravityUp: [
                { position: v2(230, 500) }
            ],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(900, 353), size: size(36, 66) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(450, 335) }
            ],
            hole: [],
            needle: [
                { position: v2(375, 326), number: 10, gravityReverse: false },
                { position: v2(525, 326), number: 10, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(450, 180) },
            gravityUp: [],
            gravityDown: [
                { position: v2(680, 270) }
            ],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],

    // Level 11
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [
                { position: v2(730, 500) }
            ],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(475, 565), size: size(530, 19) },
                { position: v2(685, 546), size: size(260, 19) },
                { position: v2(775, 527), size: size(160, 19) },
                { position: v2(815, 508), size: size(120, 19) },
                { position: v2(835, 489), size: size(110, 19) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [
                { position: v2(340, 340) }
            ],
            reverse: [],
            block: [
                { position: v2(593, 405), size: size(530, 19) },
                { position: v2(385, 386), size: size(260, 19) },
                { position: v2(300, 367), size: size(160, 19) },
                { position: v2(260, 348), size: size(120, 19) },
                { position: v2(243, 329), size: size(110, 19) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(882, 325) }
            ],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 255) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(475, 205), size: size(530, 19) },
                { position: v2(685, 224), size: size(260, 19) },
                { position: v2(775, 243), size: size(160, 19) },
                { position: v2(815, 262), size: size(120, 19) },
                { position: v2(835, 281), size: size(110, 19) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(242, 230) }
            ],
            hole: [],
            needle: []
        }
    ],
    // Level 12
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(765, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(828, 495) },
                { position: v2(215, 495) }
            ],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(620, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(752, 335) },
                { position: v2(215, 335) }
            ],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(400, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(635, 175) },
                { position: v2(215, 175) }
            ],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // Level 13
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(539, 562), size: size(582, 96) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(263, 495) },
                { position: v2(401, 495) },
                { position: v2(539, 495) },
                { position: v2(677, 495) },
                { position: v2(815, 495) },
            ],
            hole: [
                { position: v2(356, 475), size: size(34, 10) },
                { position: v2(479, 475), size: size(34, 10) },
                { position: v2(602, 475), size: size(34, 10) },
                { position: v2(725, 475), size: size(34, 10) }
            ],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(294, 417), size: size(88, 66) },
                { position: v2(415, 402), size: size(88, 96) },
                { position: v2(540, 402), size: size(88, 96) },
                { position: v2(664, 402), size: size(88, 96) },
                { position: v2(786, 417), size: size(88, 66) },

                { position: v2(294, 335), size: size(86, 30) },
                { position: v2(787, 335), size: size(86, 30) },
            ],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(416, 315), size: size(34, 10) },
                { position: v2(539, 315), size: size(34, 10) },
                { position: v2(662, 315), size: size(34, 10) }
            ],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(325, 257), size: size(146, 66) },
                { position: v2(476, 275), size: size(88, 30) },
                { position: v2(599, 257), size: size(88, 66) },
                { position: v2(753, 275), size: size(146, 30) },

                { position: v2(325, 175), size: size(146, 30) },
                { position: v2(476, 193), size: size(88, 66) },
                { position: v2(599, 175), size: size(88, 30) },
                { position: v2(753, 193), size: size(146, 66) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [{ position: v2(538, 166), number: 2, gravityReverse: false }]
        }
    ],
    // Level 14
    [
        // 1
        {
            player: { position: v2(80, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [
                { position: v2(240, 500) },
                { position: v2(270, 505) },
                { position: v2(300, 510) },
                { position: v2(600, 500) },
                { position: v2(630, 505) },
                { position: v2(660, 510) }
            ],
            gravityDown: [
                { position: v2(415, 590) },
                { position: v2(445, 585) },
                { position: v2(475, 580) },
                { position: v2(780, 590) },
                { position: v2(810, 585) },
                { position: v2(840, 580) }
            ],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(80, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(320, 444), number: 1, gravityReverse: true },
                { position: v2(482, 444), number: 1, gravityReverse: true },
                { position: v2(512, 444), number: 1, gravityReverse: true },
                { position: v2(612, 444), number: 1, gravityReverse: true },
                { position: v2(224, 326), number: 1, gravityReverse: false },
                { position: v2(424, 326), number: 1, gravityReverse: false },
                { position: v2(705, 326), number: 1, gravityReverse: false },
            ]
        },
        // 3
        {
            player: { position: v2(80, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(518, 254), size: size(42, 72) },
                { position: v2(800, 254), size: size(42, 72) },
                { position: v2(368, 196), size: size(42, 72) },
                { position: v2(664, 196), size: size(42, 72) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(220, 175) }
            ],
            hole: [],
            needle: []
        }
    ],
    // Level 15
    [
        // 1
        {
            player: { position: v2(80, 490) },
            goal: { position: v2(700, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(218, 500) },
                { position: v2(362, 500) },
                { position: v2(422, 562) },
                { position: v2(480, 500) },
                { position: v2(820, 500) }
            ],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(80, 330) },
            goal: { position: v2(190, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(115, 340) },
                { position: v2(395, 340) },
                { position: v2(580, 340) },
                { position: v2(758, 340) },
                { position: v2(300, 390) }
            ],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(80, 170) },
            goal: { position: v2(490, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(170, 180) },
                { position: v2(432, 180) },
                { position: v2(558, 180) },
                { position: v2(490, 232) },
                { position: v2(705, 232) }
            ],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],

    // Level 16
    [
        // Level 16-1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(460, 563), size: size(40, 94) },
                { position: v2(615, 563), size: size(40, 94) },
                { position: v2(713, 496), size: size(94, 32) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(460, 495) }
            ],
            hole: [],
            needle: [
                { position: v2(210, 486), number: 2, gravityReverse: false }
            ]
        },
        // Level 16-2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(550, 410) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(940, 340) }
            ],
            block: [
                { position: v2(510, 403), size: size(40, 94) },
                { position: v2(577, 372), size: size(94, 32) },
                { position: v2(713, 336), size: size(94, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(210, 326), number: 2, gravityReverse: false }
            ]
        },
        // Level 16-3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(470, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(940, 180) },
                { position: v2(20, 180) }
            ],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(210, 166), number: 2, gravityReverse: false }
            ]
        }
    ],
    // Level 17
    [
        // Level 17-1
        {
            player: { position: v2(50, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(455, 511), size: size(260, 68) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(770, 495) }
            ],
            hole: [
                { position: v2(190, 475), size: size(50, 10) },
                { position: v2(695, 475), size: size(50, 10) }
            ],
            needle: []
        },
        // Level 17-2
        {
            player: { position: v2(50, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(230, 335), size: size(260, 30) },
                { position: v2(815, 355), size: size(80, 70) }
            ],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(460, 315), size: size(50, 10) }
            ],
            needle: []
        },
        // Level 17-3
        {
            player: { position: v2(50, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(450, 175), size: size(260, 30) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(110, 175) }
            ],
            hole: [
                { position: v2(210, 155), size: size(90, 10) },
                { position: v2(700, 155), size: size(50, 10) }
            ],
            needle: []
        }
    ],
    // Level 18
    [
        // Level 18-1
        {
            player: { position: v2(100, 580) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(145, 515), size: size(290, 70) },
                { position: v2(760, 495), size: size(240, 30) },
            ],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(515, 475), size: size(32, 10) }
            ],
            needle: []
        },
        // Level 18-2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(210, 340), size: size(160, 40) },
                { position: v2(330, 355), size: size(80, 70) },
                { position: v2(434, 368), size: size(130, 96) },
                { position: v2(594, 365), size: size(128, 96) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // Level 18-3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [
                { position: v2(235, 175) },
                { position: v2(385, 175) },
                { position: v2(540, 175) },
            ],
            hole: [
                { position: v2(166, 155), size: size(32, 10) },
                { position: v2(306, 155), size: size(32, 10) },
                { position: v2(456, 155), size: size(32, 10) },
                { position: v2(624, 155), size: size(32, 10) },
            ],
            needle: []
        }
    ],
    // Level 19
    [
        // Level 19-1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(800, 562), size: size(70, 96) }
            ],
            moveBlock: [
                { position1: v2(803, 497), position2: v2(277, 497), size: size(70, 34), waitTime: 3 }
            ],
            cube: [],
            hole: [],
            needle: []
        },
        // Level 19-2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(800, 402), size: size(70, 96) }
            ],
            moveBlock: [
                { position1: v2(803, 337), position2: v2(277, 337), size: size(70, 34), waitTime: 3 }
            ],
            cube: [],
            hole: [],
            needle: []
        },
        // Level 19-3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(800, 242), size: size(70, 96) }
            ],
            moveBlock: [
                { position1: v2(803, 177), position2: v2(277, 177), size: size(70, 34), waitTime: 3 }
            ],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // Level 20
    // 20
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(510, 518), size: size(70, 76) }
            ],
            moveBlock: [
                { position1: v2(583, 502), position2: v2(437, 502), size: size(70, 44), waitTime: 1.5 }
            ],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 415) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(735, 358), size: size(450, 76) }
            ],
            moveBlock: [
                { position1: v2(373, 342), position2: v2(697, 342), size: size(280, 44), waitTime: 1.5 }
            ],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(510, 182), size: size(80, 44) }
            ],
            moveBlock: [
                { position1: v2(758, 247), position2: v2(242, 247), size: size(80, 86), waitTime: 1.5 }
            ],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 21
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [
                { position1: v2(718, 513), position2: v2(197, 513), size: size(70, 22), waitTime: 1.5 }
            ],
            cube: [],
            hole: [],
            needle: [
                { position: v2(462, 486), number: 42, gravityReverse: false }
            ]
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(200, 407), size: size(70, 86) }
            ],
            moveBlock: [
                { position1: v2(718, 342), position2: v2(197, 342), size: size(70, 44), waitTime: 1.5 }
            ],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(715, 247), size: size(70, 86) }
            ],
            moveBlock: [
                { position1: v2(718, 182), position2: v2(197, 182), size: size(70, 44), waitTime: 1.5 }
            ],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 22
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 590) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(770, 539), size: size(380, 74) },
            ],
            moveBlock: [
                { position1: v2(773, 491), position2: v2(387, 491), size: size(380, 22), waitTime: 1 }
            ],
            cube: [
                { position: v2(150, 495) }
            ],
            hole: [
                { position: v2(210, 475), size: size(40, 10) }
            ],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 430) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(250, 334), size: size(240, 28) },
            ],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(390, 315), size: size(40, 10) }
            ],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 270) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(770, 219), size: size(380, 74) },
            ],
            moveBlock: [
                { position1: v2(387, 171), position2: v2(773, 171), size: size(380, 22), waitTime: 1 }
            ],
            cube: [],
            hole: [
                { position: v2(555, 155), size: size(40, 10) }
            ],
            needle: []
        }
    ],

    // Level 23
    [
        // Stage 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(20, 580) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(940, 580) }
            ],
            block: [
                { position: v2(480, 567), size: size(140, 86) },
                { position: v2(42, 517), size: size(84, 74) },
                { position: v2(918, 517), size: size(84, 74) },
            ],
            moveBlock: [
                { position1: v2(445, 502), position2: v2(280, 502), size: size(70, 44), waitTime: 1 },
                { position1: v2(680, 502), position2: v2(515, 502), size: size(70, 44), waitTime: 1 }
            ],
            cube: [
                { position: v2(130, 495) }
            ],
            hole: [
                { position: v2(200, 475), size: size(40, 10) },
                { position: v2(770, 475), size: size(40, 10) },
            ],
            needle: []
        },
        // Stage 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [
                { position1: v2(560, 342), position2: v2(400, 342), size: size(70, 44), waitTime: 1 },
            ],
            cube: [],
            hole: [
                { position: v2(480, 315), size: size(40, 10) }
            ],
            needle: []
        },
        // Stage 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [
                { position1: v2(680, 182), position2: v2(280, 182), size: size(70, 44), waitTime: 1 }
            ],
            cube: [],
            hole: [
                { position: v2(130, 155), size: size(40, 10) },
                { position: v2(830, 155), size: size(40, 10) },
            ],
            needle: []
        }
    ],
    // 24
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(20, 590) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(640, 594), size: size(76, 32) },
                { position: v2(460, 502), size: size(70, 44) },
            ],
            moveBlock: [
                { position1: v2(720, 567), position2: v2(200, 567), size: size(70, 22), waitTime: 1.5 }
            ],
            cube: [],
            hole: [
                { position: v2(800, 475), size: size(40, 10) }
            ],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(20, 430) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(200, 342), size: size(70, 44) },
                { position: v2(720, 428), size: size(70, 44) },
            ],
            moveBlock: [
                { position1: v2(720, 385), position2: v2(200, 385), size: size(70, 22), waitTime: 1.5 },
            ],
            cube: [],
            hole: [
                { position: v2(600, 315), size: size(40, 10) }
            ],
            needle: [
                { position: v2(650, 444), number: 8, gravityReverse: true },
                { position: v2(270, 326), number: 8, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(20, 270) },
            gravityUp: [
                { position: v2(940, 180) }
            ],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(165, 260), size: size(70, 60) },
                { position: v2(510, 176), size: size(440, 32) },
                { position: v2(400, 201), size: size(70, 18) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(150, 175) }
            ],
            hole: [
                { position: v2(205, 155), size: size(40, 10) }
            ],
            needle: []
        }
    ],
    // 25
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 590) },
            gravityUp: [],
            gravityDown: [
                { position: v2(440, 590) }
            ],
            reverse: [],
            block: [
                { position: v2(200, 517), size: size(32, 74) },
                { position: v2(480, 573), size: size(32, 74) },
                { position: v2(760, 517), size: size(32, 74) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 430) },
            gravityUp: [
                { position: v2(940, 340) }
            ],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(200, 413), size: size(32, 74) },
                { position: v2(480, 357), size: size(32, 74) },
                { position: v2(760, 413), size: size(32, 74) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 270) },
            gravityUp: [
                { position: v2(165, 180) }
            ],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(200, 197), size: size(32, 74) },
                { position: v2(480, 253), size: size(32, 74) },
                { position: v2(760, 197), size: size(32, 74) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 26
    [
        // 1
        {
            player: { position: v2(50, 580) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(650, 500) }
            ],
            block: [
                { position: v2(200, 496), size: size(250, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(50, 420) },
            goal: { position: v2(20, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(475, 336), size: size(250, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(50, 260) },
            goal: { position: v2(20, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(350, 180) }
            ],
            block: [
                { position: v2(780, 176), size: size(250, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 27
    [
        // 1
        {
            player: { position: v2(30, 580) },
            goal: { position: v2(940, 560) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(627, 488), size: size(74, 16) },
                { position: v2(725, 493), size: size(74, 26) },
                { position: v2(823, 503), size: size(74, 46) },
                { position: v2(921, 510), size: size(74, 60) },
                { position: v2(402, 488), size: size(74, 16) },
                { position: v2(303, 493), size: size(74, 26) },
                { position: v2(205, 503), size: size(74, 46) },
                { position: v2(72, 510), size: size(144, 60) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(676, 486), number: 2, gravityReverse: false },
                { position: v2(775, 486), number: 2, gravityReverse: false },
                { position: v2(872, 486), number: 2, gravityReverse: false },
                { position: v2(353, 486), number: 2, gravityReverse: false },
                { position: v2(255, 486), number: 2, gravityReverse: false },
                { position: v2(157, 486), number: 2, gravityReverse: false },
            ]
        },
        // 2
        {
            player: { position: v2(30, 420) },
            goal: { position: v2(940, 400) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(590, 328), size: size(74, 16) },
                { position: v2(688, 333), size: size(74, 26) },
                { position: v2(786, 343), size: size(74, 46) },
                { position: v2(903, 350), size: size(111, 60) },
                { position: v2(365, 328), size: size(74, 16) },
                { position: v2(266, 333), size: size(74, 26) },
                { position: v2(168, 343), size: size(74, 46) },
                { position: v2(53, 350), size: size(107, 60) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(639, 326), number: 2, gravityReverse: false },
                { position: v2(738, 326), number: 2, gravityReverse: false },
                { position: v2(835, 326), number: 2, gravityReverse: false },
                { position: v2(416, 326), number: 2, gravityReverse: false },
                { position: v2(318, 326), number: 2, gravityReverse: false },
                { position: v2(220, 326), number: 2, gravityReverse: false },
            ]
        },
        // 3
        {
            player: { position: v2(30, 260) },
            goal: { position: v2(940, 240) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(553, 168), size: size(74, 16) },
                { position: v2(651, 173), size: size(74, 26) },
                { position: v2(749, 183), size: size(74, 46) },
                { position: v2(865, 190), size: size(148, 60) },
                { position: v2(326, 168), size: size(74, 16) },
                { position: v2(227, 173), size: size(74, 26) },
                { position: v2(129, 183), size: size(74, 46) },
                { position: v2(35, 190), size: size(70, 60) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(602, 166), number: 2, gravityReverse: false },
                { position: v2(701, 166), number: 2, gravityReverse: false },
                { position: v2(798, 166), number: 2, gravityReverse: false },
                { position: v2(379, 166), number: 2, gravityReverse: false },
                { position: v2(281, 166), number: 2, gravityReverse: false },
                { position: v2(183, 166), number: 2, gravityReverse: false },
            ]
        }
    ],
    // 28
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(265, 585), size: size(132, 50) },
                { position: v2(630, 585), size: size(132, 50) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(265, 554), number: 11, gravityReverse: true },
                { position: v2(630, 554), number: 11, gravityReverse: true },
            ]
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(265, 336), size: size(96, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(630, 176), size: size(96, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(440, 166), number: 2, gravityReverse: false }
            ]
        }
    ],
    // 29-----------------------------------------------------------------------------------------------------------------
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(150, 496), size: size(90, 32) },
                { position: v2(340, 496), size: size(90, 32) },
                { position: v2(520, 496), size: size(90, 32) },
                { position: v2(700, 496), size: size(90, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(60, 425), size: size(120, 50) },
                { position: v2(900, 425), size: size(120, 50) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(60, 394), number: 10, gravityReverse: true },
                { position: v2(900, 394), number: 10, gravityReverse: true },
                { position: v2(440, 326), number: 2, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(100, 160) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(150 + 90, 176), size: size(90, 32) },
                { position: v2(340 + 90, 176), size: size(90, 32) },
                { position: v2(520 + 90, 176), size: size(90, 32) },
                { position: v2(700 + 90, 176), size: size(90, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 30-----------------------------------------------------------------------------------------------------------------
    [
        // 1
        {
            player: { position: v2(20, 580) },
            goal: { position: v2(940, 590) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(38, 502), size: size(76, 44) },
                { position: v2(201, 496), size: size(82, 32) },
                { position: v2(267, 512), size: size(50, 64) },
                { position: v2(422, 502), size: size(74, 44) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(538, 495) }
            ],
            hole: [],
            needle: [
                { position: v2(122, 486), number: 2, gravityReverse: false },
                { position: v2(336, 486), number: 2, gravityReverse: false },
                { position: v2(946, 486), number: 2, gravityReverse: false }
            ]
        },
        // 2
        {
            player: { position: v2(20, 325) },
            goal: { position: v2(940, 430) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(118, 342), size: size(74, 44) },
                { position: v2(262, 342), size: size(74, 44) },
                { position: v2(336, 364), size: size(74, 88) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(688, 335) }
            ],
            hole: [],
            needle: [
                { position: v2(454, 326), number: 2, gravityReverse: false },
                { position: v2(946, 326), number: 2, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(20, 260) },
            goal: { position: v2(940, 270) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(100, 204), size: size(200, 88) },
                { position: v2(400, 176), size: size(80, 32) },
                { position: v2(465, 192), size: size(50, 64) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(818, 175) }
            ],
            hole: [],
            needle: [
                { position: v2(554, 166), number: 2, gravityReverse: false },
                { position: v2(310, 166), number: 2, gravityReverse: false },
                { position: v2(946, 166), number: 2, gravityReverse: false }
            ]
        }
    ],
    // 31-----------------------------------------------------------------------------------------------------------------
    [
        // 1
        {
            player: { position: v2(80, 580) },
            goal: { position: v2(940, 500) },
            gravityUp: [
                { position: v2(215, 540) },
                { position: v2(400, 530) }
            ],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(100, 524), size: size(200, 88) },
                { position: v2(275, 502), size: size(150, 44) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(80, 420) },
            goal: { position: v2(940, 430) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(62, 366), size: size(124, 92) },
                { position: v2(919, 366), size: size(84, 92) }
            ],
            moveBlock: [
                { position1: v2(463, 398), position2: v2(160, 398), size: size(74, 28), waitTime: 2 },
                { position1: v2(537, 398), position2: v2(840, 398), size: size(74, 28), waitTime: 2 }
            ],
            cube: [
                { position: v2(160, 335) }
            ],
            hole: [],
            needle: [
                { position: v2(865, 326), number: 2, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(480, 249), size: size(960, 82) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(478, 202), number: 80, gravityReverse: true }
            ]
        }
    ],
    // 32-----------------------------------------------------------------------------------------------------------------
    [
        // 1
        {
            player: { position: v2(80, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(165, 475), size: size(60, 10) }
            ],
            needle: [
                { position: v2(480, 486), number: 2, gravityReverse: false }
            ]
        },
        // 2
        {
            player: { position: v2(80, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(260, 352), size: size(64, 64) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(375, 335) },
                { position: v2(825, 335) }
            ],
            hole: [
                { position: v2(580, 315), size: size(110, 10) }
            ],
            needle: [
                { position: v2(519, 326), number: 1, gravityReverse: false },
                { position: v2(641, 326), number: 1, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(80, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(685, 192), size: size(64, 64) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(110, 175) }
            ],
            hole: [
                { position: v2(580, 155), size: size(54, 10) }
            ],
            needle: [
                { position: v2(580, 166), number: 8, gravityReverse: false }
            ]
        }
    ],
    // 33-----------------------------------------------------------------------------------------------------------------
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [
                { position: v2(875, 500) }
            ],
            gravityDown: [
                { position: v2(20, 585) }
            ],
            reverse: [],
            block: [
                { position: v2(510, 498), size: size(620, 36) }
            ],
            moveBlock: [
                { position1: v2(820, 502), position2: v2(200, 502), size: size(74, 44), waitTime: 1 }
            ],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 405) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(500, 356), size: size(72, 72) },
                { position: v2(754, 336), size: size(72, 32) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(586, 335) }
            ],
            hole: [
                { position: v2(635, 315), size: size(50, 10) },
                { position: v2(25, 315), size: size(50, 10) }
            ],
            needle: [
                { position: v2(451, 326), number: 2, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(755, 192), size: size(72, 72) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(285, 175) }
            ],
            hole: [],
            needle: []
        }
    ],
    // 34-----------------------------------------------------------------------------------------------------------------
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(278, 496), size: size(16, 32) },
                { position: v2(358, 496), size: size(16, 32) },
                { position: v2(438, 496), size: size(16, 32) },
                { position: v2(518, 496), size: size(16, 32) },
                { position: v2(598, 496), size: size(16, 32) },
                { position: v2(678, 496), size: size(16, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(318, 486), number: 1, gravityReverse: false },
                { position: v2(478, 486), number: 1, gravityReverse: false }
            ]
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(238, 336), size: size(16, 32) },
                { position: v2(318, 336), size: size(16, 32) },
                { position: v2(398, 336), size: size(16, 32) },
                { position: v2(478, 336), size: size(16, 32) },
                { position: v2(558, 336), size: size(16, 32) },
                { position: v2(638, 336), size: size(16, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(358, 326), number: 1, gravityReverse: false },
                { position: v2(518, 326), number: 1, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(198, 176), size: size(16, 32) },
                { position: v2(278, 176), size: size(16, 32) },
                { position: v2(358, 176), size: size(16, 32) },
                { position: v2(438, 176), size: size(16, 32) },
                { position: v2(518, 176), size: size(16, 32) },
                { position: v2(598, 176), size: size(16, 32) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(398, 166), number: 1, gravityReverse: false },
                { position: v2(558, 166), number: 1, gravityReverse: false }
            ]
        }
    ],
    // Level 35
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(585, 498), size: size(360, 36) },
                { position: v2(255, 588), size: size(90, 44) }
            ],
            moveBlock: [
                { position1: v2(780, 541), position2: v2(262, 541), size: size(76, 50), waitTime: 1 }
            ],
            cube: [],
            hole: [
                { position: v2(320, 475), size: size(60, 10) }
            ],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 380) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(588, 428), size: size(276, 44) },
                { position: v2(790, 340), size: size(340, 40) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(536, 326), number: 14, gravityReverse: false }
            ]
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(350, 206), size: size(46, 24) },
                { position: v2(475, 206), size: size(46, 24) },
                { position: v2(595, 206), size: size(46, 24) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(400, 175) },
                { position: v2(522, 175) },
                { position: v2(642, 175) },
                { position: v2(740, 175) }
            ],
            hole: [
                { position: v2(775, 155), size: size(60, 10) }
            ],
            needle: []
        }
    ],
    // Level 36
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [
                { position: v2(360, 495) }
            ],
            hole: [
                { position: v2(470, 475), size: size(60, 10) }
            ],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(940, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(308, 342), size: size(76, 44) },
                { position: v2(470, 366), size: size(170, 92) }
            ],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(365, 315), size: size(60, 10) },
                { position: v2(750, 315), size: size(60, 10) }
            ],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 244) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(470, 192), size: size(140, 64) },
                { position: v2(890, 192), size: size(140, 64) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(585, 175) }
            ],
            hole: [
                { position: v2(660, 155), size: size(60, 10) }
            ],
            needle: []
        }
    ],
    // Level 37
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(20, 570) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [
                { position: v2(900, 495) }
            ],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(20, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(455, 338), size: size(110, 36) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(522, 326), number: 2, gravityReverse: false },
                { position: v2(388, 326), number: 2, gravityReverse: false },
            ]
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(20, 250) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [
                { position: v2(900, 175) }
            ],
            hole: [],
            needle: []
        }
    ],
    // Level 38
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(365, 505) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(410, 500), size: size(40, 40) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(585, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(630, 340), size: size(40, 40) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(595, 180), size: size(110, 40) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(370, 166), number: 2, gravityReverse: false }
            ]
        }
    ],
    // Level 39
    [
        // 1
        {
            player: { position: v2(50, 490) },
            goal: { position: v2(508, 545) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(110, 495), size: size(60, 30) },
                { position: v2(175, 513), size: size(70, 66) },
                { position: v2(245, 495), size: size(70, 30) },
                { position: v2(345, 513), size: size(70, 66) },
                { position: v2(585, 502), size: size(330, 44) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 2
        {
            player: { position: v2(50, 330) },
            goal: { position: v2(372, 380) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(158, 339), size: size(165, 38) },
                { position: v2(275, 356), size: size(70, 72) },
                { position: v2(375, 339), size: size(70, 38) },
                { position: v2(525, 356), size: size(170, 72) },
                { position: v2(695, 339), size: size(170, 38) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        // 3
        {
            player: { position: v2(50, 170) },
            goal: { position: v2(435, 220) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(130, 180), size: size(40, 40) },
                { position: v2(465, 178), size: size(380, 36) },
                { position: v2(785, 180), size: size(40, 40) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // Level 40
    [
        // 1
        {
            player: { position: v2(100, 490) },
            goal: { position: v2(940, 590) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(155, 500), size: size(70, 40) },
                { position: v2(255, 540), size: size(70, 40) },
                { position: v2(355, 540), size: size(70, 40) },
                { position: v2(455, 500), size: size(70, 40) },
                { position: v2(555, 540), size: size(70, 40) },
                { position: v2(655, 540), size: size(70, 40) },
                { position: v2(840, 540), size: size(240, 40) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(948, 486), number: 2, gravityReverse: false }
            ]
        },
        // 2
        {
            player: { position: v2(100, 330) },
            goal: { position: v2(495, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(135, 340) },
                { position: v2(940, 340) },
            ],
            block: [
                { position: v2(295, 340), size: size(70, 40) },
                { position: v2(685, 340), size: size(70, 40) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(295, 365), number: 1, gravityReverse: false },
                { position: v2(685, 365), number: 1, gravityReverse: false },
            ]
        },
        // 3
        {
            player: { position: v2(100, 170) },
            goal: { position: v2(20, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(940, 180) }
            ],
            block: [
                { position: v2(148, 180), size: size(76, 40) },
                { position: v2(756, 180), size: size(76, 40) },
                { position: v2(452, 282), size: size(532, 16) }
            ],
            moveBlock: [
                { position1: v2(224, 222), position2: v2(224, 178), size: size(76, 40), waitTime: 1 },
                { position1: v2(300, 178), position2: v2(300, 222), size: size(76, 40), waitTime: 1 },
                { position1: v2(376, 222), position2: v2(376, 178), size: size(76, 40), waitTime: 1 },
                { position1: v2(452, 178), position2: v2(452, 222), size: size(76, 40), waitTime: 1 },
                { position1: v2(528, 222), position2: v2(528, 178), size: size(76, 40), waitTime: 1 },
                { position1: v2(604, 178), position2: v2(604, 222), size: size(76, 40), waitTime: 1 },
                { position1: v2(680, 222), position2: v2(680, 178), size: size(76, 40), waitTime: 1 }
            ],
            cube: [],
            hole: [],
            needle: [
                { position: v2(452, 268), number: 44, gravityReverse: true }
            ]
        }
    ],
    //41
    [
        {
            player: { position: v2(100, 570) },
            goal: { position: v2(180, 540) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(100, 500) },
                { position: v2(500, 500) },
                { position: v2(865, 500) }
            ],
            block: [
                { position: v2(40, 518), size: size(80, 76) },
                { position: v2(115, 541), size: size(70, 30) },
                { position: v2(315, 495), size: size(50, 30) },
                { position: v2(923, 500), size: size(76, 40) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        {
            player: { position: v2(100, 410) },
            goal: { position: v2(865, 380) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(100, 340) },
                { position: v2(500, 340) },
                { position: v2(865, 340) }
            ],
            block: [
                { position: v2(40, 358), size: size(80, 76) },
                { position: v2(115, 381), size: size(70, 30) },
                { position: v2(690, 335), size: size(50, 30) },
                { position: v2(923, 340), size: size(76, 40) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        {
            player: { position: v2(100, 250) },
            goal: { position: v2(500, 220) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(100, 180) },
                { position: v2(500, 180) },
                { position: v2(865, 180) }
            ],
            block: [
                { position: v2(40, 198), size: size(80, 76) },
                { position: v2(115, 221), size: size(70, 30) },
                { position: v2(923, 180), size: size(76, 40) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    [
        {
            player: { position: v2(80, 480) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [
                { position: v2(170, 495) }
            ],
            hole: [],
            needle: [
                { position: v2(586, 486), number: 2, gravityReverse: false }
            ]
        },
        {
            player: { position: v2(80, 320) },
            goal: { position: v2(575, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(780, 342), size: size(360, 44) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(940, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [
                { position: v2(772, 175) }
            ],
            hole: [],
            needle: [
                { position: v2(170, 166), number: 2, gravityReverse: false }
            ]
        }
    ],
    //42
    [
        {
            player: { position: v2(80, 480) },
            goal: { position: v2(940, 590) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(370, 578), size: size(100, 64) },
                { position: v2(600, 496), size: size(32, 32) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(564, 495) }
            ],
            hole: [],
            needle: []
        },
        {
            player: { position: v2(80, 320) },
            goal: { position: v2(940, 366) },
            gravityUp: [
                { position: v2(135, 365) }
            ],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(910, 418), size: size(100, 64) },
                { position: v2(552, 336), size: size(64, 32) },
                { position: v2(375, 442), size: size(40, 16) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(500, 335) }
            ],
            hole: [
                { position: v2(290, 315), size: size(60, 10) }
            ],
            needle: []
        },
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(940, 270) },
            gravityUp: [],
            gravityDown: [
                { position: v2(135, 245) }
            ],
            reverse: [],
            block: [
                { position: v2(718, 258), size: size(100, 64) },
                { position: v2(490, 176), size: size(96, 32) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(422, 175) }
            ],
            hole: [],
            needle: [
                { position: v2(380, 284), number: 1, gravityReverse: true }
            ]
        }
    ],
    //44
    [
        {
            player: { position: v2(80, 480) },
            goal: { position: v2(644, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(940, 500) }
            ],
            block: [
                { position: v2(314, 496), size: size(12, 32) },
                { position: v2(446, 496), size: size(12, 32) },
                { position: v2(578, 496), size: size(12, 32) },
                { position: v2(710, 496), size: size(12, 32) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        {
            player: { position: v2(80, 320) },
            goal: { position: v2(446, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(940, 340) }
            ],
            block: [
                { position: v2(314 - 66, 336), size: size(12, 32) },
                { position: v2(446 - 66, 336), size: size(12, 32) },
                { position: v2(578 - 66, 336), size: size(12, 32) },
                { position: v2(710 - 66, 336), size: size(12, 32) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        },
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(248, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(940, 180) }
            ],
            block: [
                { position: v2(314 - 132, 176), size: size(12, 32) },
                { position: v2(446 - 132, 176), size: size(12, 32) },
                { position: v2(578 - 132, 176), size: size(12, 32) },
                { position: v2(710 - 132, 176), size: size(12, 32) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    [
        {
            player: { position: v2(80, 480) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(725, 510), size: size(130, 60) }
            ],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(634, 475), size: size(60, 10) }
            ],
            needle: []
        },
        {
            player: { position: v2(80, 320) },
            goal: { position: v2(20, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(940, 340) }
            ],
            block: [],
            moveBlock: [],
            cube: [{ position: v2(386, 335) }],
            hole: [
                { position: v2(540, 315), size: size(60, 10) },
            ],
            needle: []
        },
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(20, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(940, 180) }
            ],
            block: [
                { position: v2(350, 192), size: size(140, 64) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(100, 175) }
            ],
            hole: [
                { position: v2(254, 155), size: size(60, 10) },
                { position: v2(450, 155), size: size(60, 10) },
            ],
            needle: []
        }
    ],
    //46
    [
        {
            player: { position: v2(80, 480) },
            goal: { position: v2(220, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(915, 518), size: size(90, 76) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(340, 486), number: 1, gravityReverse: false },
                { position: v2(460, 486), number: 1, gravityReverse: false },
                { position: v2(580, 486), number: 1, gravityReverse: false },
                { position: v2(700, 486), number: 1, gravityReverse: false },
            ]
        },
        {
            player: { position: v2(80, 320) },
            goal: { position: v2(170, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(890, 358), size: size(140, 76) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(340, 326), number: 1, gravityReverse: false },
                { position: v2(460, 326), number: 1, gravityReverse: false },
                { position: v2(580, 326), number: 1, gravityReverse: false },
                { position: v2(700, 326), number: 1, gravityReverse: false },
            ]
        },
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(120, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(865, 198), size: size(190, 76) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(340, 166), number: 1, gravityReverse: false },
                { position: v2(460, 166), number: 1, gravityReverse: false },
                { position: v2(580, 166), number: 1, gravityReverse: false },
                { position: v2(700, 166), number: 1, gravityReverse: false },
            ]
        }
    ],
    [
        {
            player: { position: v2(80, 480) },
            goal: { position: v2(940, 520) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(150, 486), number: 2, gravityReverse: false },
                { position: v2(252, 486), number: 2, gravityReverse: false },
                { position: v2(694, 486), number: 2, gravityReverse: false },
                { position: v2(936, 486), number: 4, gravityReverse: false },
            ]
        },
        {
            player: { position: v2(80, 320) },
            goal: { position: v2(940, 360) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(190, 422), size: size(26, 56) },
                { position: v2(681, 422), size: size(26, 56) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(408, 326), number: 5, gravityReverse: false },
                { position: v2(190, 388), number: 2, gravityReverse: true },
                { position: v2(681, 388), number: 2, gravityReverse: true },
                { position: v2(936, 326), number: 4, gravityReverse: false },
            ]
        },
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(940, 200) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(222, 166), number: 2, gravityReverse: false },
                { position: v2(500, 166), number: 2, gravityReverse: false },
                { position: v2(936, 166), number: 4, gravityReverse: false }
            ]
        }
    ],
    // 48
    [
        // 1
        {
            player: { position: v2(80, 520) },
            goal: { position: v2(70, 535) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(70, 496), size: size(60, 32) },
                { position: v2(120, 528), size: size(60, 32) },
                { position: v2(250, 528), size: size(60, 32) },
                { position: v2(410, 512), size: size(60, 64) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(205, 495) },
                { position: v2(500, 495) },
                { position: v2(655, 495) },
            ],
            hole: [
                { position: v2(125, 475), size: size(50, 10) },
                { position: v2(540, 475), size: size(40, 10) },
            ],
            needle: [],
        },
        // 2
        {
            player: { position: v2(80, 320) },
            goal: { position: v2(750, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(190, 368), size: size(60, 32) },
                { position: v2(370, 336), size: size(60, 32) },
                { position: v2(700, 352), size: size(60, 64) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(190, 399) },
                { position: v2(885, 335) },
            ],
            hole: [
                { position: v2(320, 315), size: size(40, 10) },
                { position: v2(650, 315), size: size(40, 10) },
                { position: v2(750, 315), size: size(40, 10) },
            ],
            needle: [
                { position: v2(288, 326), number: 2, gravityReverse: false },
            ],
        },
        // 3
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(880, 180) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(530, 192), size: size(60, 64) },
                { position: v2(830, 192), size: size(60, 64) },
            ],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(170, 155), size: size(40, 10) },
                { position: v2(480, 155), size: size(40, 10) },
            ],
            needle: [],
        },
    ],
    // 49
    [
        // 1
        {
            player: { position: v2(80, 480) },
            goal: { position: v2(940, 500) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(170, 564), size: size(340, 92) },
                { position: v2(365, 587), size: size(90, 46) },
                { position: v2(430, 503), size: size(80, 46) },
                { position: v2(510, 526), size: size(90, 92) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(632, 486), number: 12, gravityReverse: false },
            ],
        },
        // 2
        {
            player: { position: v2(80, 420) },
            goal: { position: v2(20, 430) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(900, 370) },
            ],
            block: [
                { position: v2(60, 368), size: size(120, 96) },
                { position: v2(920, 418), size: size(80, 64) },
            ],
            moveBlock: [
                { position1: v2(843, 401), position2: v2(157, 401), size: size(80, 30), waitTime: 2 },
            ],
            cube: [],
            hole: [],
            needle: [
                { position: v2(868, 326), number: 2, gravityReverse: false },
            ],
        },
        // 3
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(940, 180) },
            gravityUp: [
                { position: v2(384, 190) },
            ],
            gravityDown: [
                { position: v2(576, 190) },
            ],
            reverse: [],
            block: [
                { position: v2(480, 255), size: size(960, 70) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: [
                { position: v2(180, 214), number: 30, gravityReverse: true },
                { position: v2(480, 166), number: 12, gravityReverse: false },
                { position: v2(780, 214), number: 30, gravityReverse: true },
            ],
        },
    ],
    // 50
    [
        // 1
        {
            player: { position: v2(80, 480) },
            goal: { position: v2(20, 590) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(850, 575) },
            ],
            block: [],
            moveBlock: [],
            cube: [
                { position: v2(800, 495) }
            ],
            hole: [
                { position: v2(715, 475), size: size(50, 10) },
            ],
            needle: [
                { position: v2(632, 604), number: 2, gravityReverse: true },
                { position: v2(715, 604), number: 2, gravityReverse: true },
            ]
        },
        // 2
        {
            player: { position: v2(80, 320) },
            goal: { position: v2(20, 430) },
            gravityUp: [],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(105, 408), size: size(90, 84) }
            ],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(470, 315), size: size(60, 10) },
            ],
            needle: []
        },
        // 3
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(20, 270) },
            gravityUp: [
                { position: v2(945, 180) }
            ],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(875, 197), size: size(90, 74) }
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 51
    [
        // 1
        {
            player: { position: v2(80, 480) },
            goal: { position: v2(940, 590) },
            gravityUp: [
                { position: v2(260, 495) },
                { position: v2(820, 495) },
            ],
            gravityDown: [
                { position: v2(540, 595) }
            ],
            reverse: [],
            block: [
                { position: v2(203, 512), size: size(36, 64) },
                { position: v2(478, 578), size: size(36, 64) },
                { position: v2(763, 512), size: size(36, 64) },
            ],
            moveBlock: [],
            cube: [],
            hole: [
                { position: v2(870, 475), size: size(40, 10) },
            ],
            needle: []
        },
        // 2
        {
            player: { position: v2(80, 320) },
            goal: { position: v2(20, 430) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(480, 385) }
            ],
            block: [
                { position: v2(203, 434), size: size(32, 32) },
                { position: v2(203, 336), size: size(32, 32) },
                { position: v2(763, 434), size: size(32, 32) },
                { position: v2(763, 336), size: size(32, 32) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(140, 335) },
                { position: v2(405, 335) },
                { position: v2(915, 335) },
            ],
            hole: [
                { position: v2(100, 315), size: size(40, 10) },
            ],
            needle: []
        },
        // 3
        {
            player: { position: v2(80, 160) },
            goal: { position: v2(940, 270) },
            gravityUp: [
                { position: v2(420, 180) }
            ],
            gravityDown: [
                { position: v2(140, 270) },
                { position: v2(700, 270) },
            ],
            reverse: [],
            block: [
                { position: v2(203, 258), size: size(36, 64) },
                { position: v2(478, 192), size: size(36, 64) },
                { position: v2(763, 258), size: size(36, 64) },
            ],
            moveBlock: [],
            cube: [],
            hole: [],
            needle: []
        }
    ],
    // 53
    [
        {
            player: { position: v2(1250, 480) },
            goal: { position: v2(20, 590) },
            gravityUp: [
                { position: v2(20, 545) }
            ],
            gravityDown: [],
            reverse: [],
            block: [
                { position: v2(655, 510), size: size(150, 60) },
                { position: v2(1132, 496), size: size(32, 32) },
                { position: v2(1754, 496), size: size(32, 32) },
                { position: v2(2250, 510), size: size(140, 60) },
            ],
            moveBlock: [],
            cube: [
                { position: v2(972, 495) },
                { position: v2(1354, 495) },
                { position: v2(1912, 495) },
            ],
            hole: [
                { position: v2(1436, 475), size: size(60, 10) },
            ],
            needle: [
                { position: v2(480, 604), number: 80, gravityReverse: true },
                { position: v2(496, 486), number: 2, gravityReverse: false },
                { position: v2(2500, 604), number: 80, gravityReverse: true },
                { position: v2(2408, 486), number: 2, gravityReverse: false },
            ]
        },
        {
            player: { position: v2(1250, 320) },
            goal: { position: v2(120, 340) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(2182, 375) }
            ],
            block: [
                { position: v2(48, 344), size: size(96, 48) },
                { position: v2(140, 392), size: size(148, 48) },
                { position: v2(393, 420), size: size(26, 60) },
                { position: v2(586, 344), size: size(128, 48) },
                { position: v2(742, 418), size: size(144, 64) },
                { position: v2(902, 344), size: size(126, 48) },
                { position: v2(1077, 385), size: size(124, 130) },
                { position: v2(1652, 344), size: size(124, 48) },
                { position: v2(1904, 344), size: size(124, 48) },
                { position: v2(2039, 368), size: size(146, 96) },
                { position: v2(2361, 426), size: size(122, 48) },
                { position: v2(2635, 426), size: size(122, 48) },
                { position: v2(2832, 344), size: size(96, 48) },
            ],
            moveBlock: [
                { position1: v2(2600, 344), position2: v2(2396, 344), size: size(198, 48), waitTime: 1 }
            ],
            cube: [],
            hole: [
                { position: v2(990, 315), size: size(50, 10) },
            ],
            needle: [
                { position: v2(393, 384), number: 2, gravityReverse: true },
                { position: v2(740, 326), number: 2, gravityReverse: false },
                { position: v2(1418, 326), number: 2, gravityReverse: false },
                { position: v2(1770, 326), number: 2, gravityReverse: false },
                { position: v2(1956, 374), number: 2, gravityReverse: false },
                { position: v2(2360, 396), number: 10, gravityReverse: true },
                { position: v2(2634, 396), number: 10, gravityReverse: true },
                { position: v2(2708, 326), number: 2, gravityReverse: false },
            ]
        },
        {
            player: { position: v2(1250, 160) },
            goal: { position: v2(1422, 265) },
            gravityUp: [],
            gravityDown: [],
            reverse: [
                { position: v2(194, 180) }
            ],
            block: [
                { position: v2(57, 263), size: size(28, 54) },
                { position: v2(450, 184), size: size(480, 48) },
                { position: v2(248, 232), size: size(76, 48) },
                { position: v2(470, 232), size: size(76, 48) },
                { position: v2(800, 184), size: size(136, 48) },
                { position: v2(964, 184), size: size(136, 48) },
                { position: v2(1130, 184), size: size(136, 48) },
                { position: v2(1384, 225), size: size(38, 130) },
                { position: v2(1459, 262), size: size(26, 56) },
                { position: v2(1525, 185), size: size(60, 50) },
                { position: v2(1927, 262), size: size(26, 56) },
                { position: v2(2027, 262), size: size(26, 56) },
                { position: v2(1978, 168), size: size(76, 16) },
                { position: v2(2078, 176), size: size(76, 32) },
                { position: v2(2178, 184), size: size(76, 48) },
                { position: v2(2278, 192), size: size(76, 64) },
                { position: v2(2378, 184), size: size(76, 48) },
                { position: v2(2478, 176), size: size(76, 32) },
                { position: v2(2578, 168), size: size(76, 16) },
                { position: v2(2760, 262), size: size(26, 56) },
                { position: v2(2840, 262), size: size(26, 56) },
            ],
            moveBlock: [
                { position1: v2(473, 273), position2: v2(267, 273), size: size(200, 34), waitTime: 1 }
            ],
            cube: [],
            hole: [],
            needle: [
                { position: v2(6, 166), number: 1, gravityReverse: false },
                { position: v2(57, 230), number: 2, gravityReverse: true },
                { position: v2(712, 166), number: 2, gravityReverse: false },
                { position: v2(882, 166), number: 2, gravityReverse: false },
                { position: v2(1459, 228), number: 2, gravityReverse: true },
                { position: v2(1927, 228), number: 2, gravityReverse: true },
                { position: v2(2027, 228), number: 2, gravityReverse: true },
                { position: v2(2030, 166), number: 2, gravityReverse: false },
                { position: v2(2130, 166), number: 2, gravityReverse: false },
                { position: v2(2230, 166), number: 2, gravityReverse: false },
                { position: v2(2330, 166), number: 2, gravityReverse: false },
                { position: v2(2430, 166), number: 2, gravityReverse: false },
                { position: v2(2530, 166), number: 2, gravityReverse: false },
                { position: v2(2720, 166), number: 2, gravityReverse: false },
                { position: v2(2760, 228), number: 2, gravityReverse: true },
                { position: v2(2800, 166), number: 2, gravityReverse: false },
                { position: v2(2840, 228), number: 2, gravityReverse: true },
                { position: v2(2875, 166), number: 1, gravityReverse: false },
            ]
        }
    ],
    //54
    [
        {
            player: { position: v2(1250, 480) },
            goal: { position: v2(40, 500) },
            gravityUp: [],
            gravityDown: [
                { position: v2(2344, 590) }
            ],
            reverse: [],
            block: [
                { position: v2(182, 583), size: size(124, 54) },
                { position: v2(406, 508), size: size(128, 56) },
                { position: v2(590, 590), size: size(120, 40) },
                { position: v2(590, 550), size: size(60, 40) },
                { position: v2(700, 500), size: size(120, 40) },
                { position: v2(700, 540), size: size(60, 40) },
                { position: v2(855, 500), size: size(120, 40) },
                { position: v2(855, 540), size: size(60, 40) },
                { position: v2(995, 540), size: size(90, 40) },
                { position: v2(1015, 500), size: size(130, 40) },
                { position: v2(1365, 572), size: size(30, 76) },
                { position: v2(1577, 500), size: size(126, 40) },
                { position: v2(1731, 500), size: size(126, 40) },
                { position: v2(1937, 500), size: size(126, 40) },
                { position: v2(1983, 540), size: size(126, 40) },
                { position: v2(2135, 540), size: size(126, 40) },
                { position: v2(2403, 570), size: size(74, 80) },
                { position: v2(2475, 590), size: size(70, 40) }
            ],
            moveBlock: [],
            cube: [
                { position: v2(580, 495) }
            ],
            hole: [],
            needle: [
                { position: v2(290, 604), number: 1, gravityReverse: true },
                { position: v2(270, 486), number: 12, gravityReverse: false },
                { position: v2(440, 542), number: 1, gravityReverse: false },
                { position: v2(554, 564), number: 1, gravityReverse: true },
                { position: v2(626, 564), number: 1, gravityReverse: true },
                { position: v2(590, 524), number: 1, gravityReverse: true },
                { position: v2(634, 486), number: 1, gravityReverse: false },
                { position: v2(664, 526), number: 1, gravityReverse: false },
                { position: v2(700, 566), number: 1, gravityReverse: false },
                { position: v2(734, 526), number: 1, gravityReverse: false },
                { position: v2(819, 526), number: 1, gravityReverse: false },
                { position: v2(855, 526), number: 1, gravityReverse: false },
                { position: v2(889, 526), number: 1, gravityReverse: false },
                { position: v2(1450, 604), number: 1, gravityReverse: true },
                { position: v2(1634, 526), number: 1, gravityReverse: false },
                { position: v2(1674, 526), number: 1, gravityReverse: false },
                { position: v2(1818, 486), number: 1, gravityReverse: false },
                { position: v2(1868, 486), number: 1, gravityReverse: false },
                { position: v2(1914, 526), number: 1, gravityReverse: false },
                { position: v2(2040, 482), number: 1, gravityReverse: false },
                { position: v2(2080, 518), number: 1, gravityReverse: true },
                { position: v2(2108, 566), number: 6, gravityReverse: false },
                { position: v2(2188, 482), number: 1, gravityReverse: false }
            ]
        }
    ]
];


