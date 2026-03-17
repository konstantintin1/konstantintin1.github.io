const tasksDB = {
    // Тип 1: Формы глаголов (V2 и V3)
    verbs: {
        "be": { v2: "was/were", v3: "been", translate: "быть", optionsV2: ["was/were", "beed", "were", "was"], optionsV3: ["been", "beed", "bin", "was"] },
        "become": { v2: "became", v3: "become", translate: "становиться", optionsV2: ["became", "becomen", "becomes", "becamee"], optionsV3: ["become", "became", "becomen", "becoming"] },
        "begin": { v2: "began", v3: "begun", translate: "начинать", optionsV2: ["began", "begun", "beginned", "begins"], optionsV3: ["begun", "began", "beginned", "begon"] },
        "break": { v2: "broke", v3: "broken", translate: "ломать", optionsV2: ["broke", "breaked", "broken", "breaks"], optionsV3: ["broken", "broke", "breaken", "broked"] },
        "bring": { v2: "brought", v3: "brought", translate: "приносить", optionsV2: ["brought", "brang", "bringed", "brung"], optionsV3: ["brought", "brung", "bringed", "broughten"] },
        "buy": { v2: "bought", v3: "bought", translate: "покупать", optionsV2: ["bought", "buyed", "boughten", "boughts"], optionsV3: ["bought", "buyed", "boughten", "bin"] },
        "choose": { v2: "chose", v3: "chosen", translate: "выбирать", optionsV2: ["chose", "choosed", "chosen", "chooses"], optionsV3: ["chosen", "chose", "choosed", "choosen"] },
        "do": { v2: "did", v3: "done", translate: "делать", optionsV2: ["did", "done", "doed", "does"], optionsV3: ["done", "did", "doen", "doing"] },
        "drink": { v2: "drank", v3: "drunk", translate: "пить", optionsV2: ["drank", "drunk", "drinked", "drinks"], optionsV3: ["drunk", "drank", "drinken", "drunken"] },
        "drive": { v2: "drove", v3: "driven", translate: "водить", optionsV2: ["drove", "drived", "driven", "droves"], optionsV3: ["driven", "drove", "drivened", "droven"] },
        "eat": { v2: "ate", v3: "eaten", translate: "есть", optionsV2: ["ate", "eaten", "eated", "eats"], optionsV3: ["eaten", "ate", "eatened", "eated"] },
        "fall": { v2: "fell", v3: "fallen", translate: "падать", optionsV2: ["fell", "falled", "fallen", "falls"], optionsV3: ["fallen", "fell", "fallened", "felled"] },
        "get": { v2: "got", v3: "got", translate: "получать", optionsV2: ["got", "getted", "gotten", "gets"], optionsV3: ["got", "gotten", "getted", "gotted"] },
        "give": { v2: "gave", v3: "given", translate: "давать", optionsV2: ["gave", "gived", "given", "gives"], optionsV3: ["given", "gave", "givened", "gived"] },
        "go": { v2: "went", v3: "gone", translate: "идти", optionsV2: ["went", "gone", "goed", "goes"], optionsV3: ["gone", "went", "wenten", "going"] },
        "know": { v2: "knew", v3: "known", translate: "знать", optionsV2: ["knew", "knowed", "known", "knows"], optionsV3: ["known", "knew", "knowen", "knowed"] },
        "make": { v2: "made", v3: "made", translate: "делать", optionsV2: ["made", "maked", "mades", "making"], optionsV3: ["made", "maden", "maked", "making"] },
        "see": { v2: "saw", v3: "seen", translate: "видеть", optionsV2: ["saw", "seen", "seed", "sees"], optionsV3: ["seen", "saw", "seened", "seeing"] },
        "write": { v2: "wrote", v3: "written", translate: "писать", optionsV2: ["wrote", "writed", "written", "writes"], optionsV3: ["written", "wrote", "writen", "wroteen"] },
        "take": { v2: "took", v3: "taken", translate: "брать", optionsV2: ["took", "taked", "taken", "takes"], optionsV3: ["taken", "took", "taked", "takenen"] }
    },

    // Тип 2: Пропуски
    sentences: [
        { text: "I have ___ a secret treasure chest.", options: ["found", "find", "finded", "founden"], answer: "found" },
        { text: "You must ___ your health before the boss fight.", options: ["restore", "restored", "restoring", "restores"], answer: "restore" },
        { text: "The rogue ___ the key from the guard.", options: ["stole", "steal", "stealed", "stolen"], answer: "stole" },
        { text: "We ___ through the Dark Forest for three days.", options: ["walked", "walk", "walking", "walks"], answer: "walked" },
        { text: "The wizard ___ a spell to open the ancient gate.", options: ["casts", "cast", "casting", "caster"], answer: "casts" },
        { text: "The dragon is ___ above the mountains.", options: ["flying", "fly", "flew", "flown"], answer: "flying" },
        { text: "The rogue ___ quietly through the dungeon.", options: ["sneaks", "sneak", "sneaking", "sneaked"], answer: "sneaks" },
        { text: "The healer ___ a potion to the wounded hero.", options: ["gives", "give", "giving", "given"], answer: "gives" },
        { text: "The party must ___ the bridge before the trolls arrive.", options: ["cross", "crosses", "crossing", "crossed"], answer: "cross" },
        { text: "The adventurer ___ a torch in the dark cave.", options: ["lights", "light", "lighting", "lit"], answer: "lights" },
        { text: "The goblins are ___ the treasure chest.", options: ["guarding", "guard", "guards", "guarded"], answer: "guarding" },
        { text: "The knight must ___ the princess from the tower.", options: ["rescue", "rescues", "rescued", "rescuing"], answer: "rescue" },
        { text: "The wizard ___ ancient runes on the stone.", options: ["reads", "read", "reading", "reader"], answer: "reads" },
        { text: "The dragon ___ on a mountain of gold.", options: ["sleeps", "sleep", "sleeping", "slept"], answer: "sleeps" },
        { text: "The hero is ___ through the forest.", options: ["traveling", "travel", "traveled", "travels"], answer: "traveling" }
    ],


    // Тип 3: Диалоги
    dialogues: [
        { q: "Where is the Ancient Artifact hidden?", options: ["In the deep cave.", "I like apples.", "Tomorrow morning.", "It is blue."], answer: "In the deep cave." },
        { q: "Who is the ruler of this kingdom?", options: ["King Arthur.", "A simple farmer.", "A dangerous wolf.", "The blacksmith."], answer: "King Arthur." },
        { q: "Do you have enough mana to teleport?", options: ["Yes, I do.", "I am a cat!", "I have a sword.", "It is far away."], answer: "Yes, I do." },
        { q: "What happened to the lost squad?", options: ["They were defeated.", "A have a sword.", "It is a big city.", "I am a mage."], answer: "They were defeated." },
        { q: "Where can we find the dragon's treasure?", options: ["In the old mountain.", "I drink water.", "My boots are red.", "It is very small."], answer: "In the old mountain." },
        { q: "Who guards the northern gate?", options: ["A brave knight.", "Three oranges.", "My sister.", "A wooden table."], answer: "A brave knight." },
        { q: "Do you know the secret spell?", options: ["Yes, I know it.", "The bread is hot.", "My horse is fast.", "It is under the bed."], answer: "Yes, I know it." },
        { q: "What is in the wizard's tower?", options: ["Ancient books.", "Two sandwiches.", "A yellow hat.", "My old shoes."], answer: "Ancient books." },
        { q: "What do we need to open the magic door?", options: ["A silver key.", "A blue pillow.", "Hot soup.", "A wooden spoon."], answer: "A silver key." },
        { q: "Where is the hidden dungeon entrance?", options: ["Behind the waterfall.", "I eat bread.", "My cloak is warm.", "The stone is round."], answer: "Behind the waterfall." }
    ]
};