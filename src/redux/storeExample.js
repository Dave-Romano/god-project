const PlayerPattern = {
  id: "string",
  publicName: "string",
  privateName: "string",
  race: "string",
  age: "string",
  moral: "string",
  personalGoal: "string",
  appearance: "string",
  prehistory: "string",
  //- - - - - - - - - - - - - - - - - - - - - - - - - - -
  isActive: true,
  isGuest: false,
  isSleep: false,
  isRest: false,
  //- - - - - - - - - - - - - - - - - - - - - - - - - - -
  stats: {
    health: 100,
    maxHealth: 100,
    mana: 100,
    maxMana: 100,
    endurance: 100,
    maxEndurance: 100,
    mind: 100,
    maxMind: 100,
    //- - -
    dodge: 1,
    speed: 1,
    initiative: 1,
    //- - -
    defense: 100,
    maxDefense: 100,
    magicDefense: 100,
    maxMagicDefense: 100,
    shield: 100,
    maxShield: 100,
    magicShield: 100,
    maxMagicShield: 100,
    //- - -
    offense: 100,
    magicOffense: 100,
  },
  needs: {
    water: 72,
    food: 72,
    sleep: 72,
    purity: 72,
    endurance: 72,
  },
  effects: {
    visible: {
      buffs: {},
      debuffs: {},
    },
    hidden: {
      buffs: {},
      debuffs: {},
    },
  },
  //- - - - - - - - - - - - - - - - - - - - - - - - - - -
  attributes: {
    damage: 20,
    complection: 20,
    endurance: 20,
    magicDamage: 20,
    will: 20,
    mind: 20,
  },
  skills: [{}, {}, {}],
  abilities: [{}, {}, {}],
  //- - - - - - - - - - - - - - - - - - - - - - - - - - -
  inventory: {
    backpack: [{}, {}, {}],
    equipment: {
      helmet: {},
      cuirass: {},
      greaves: {},
      gloves: {},
      boots: {},
      clothes: {},
      amulet: {},
      ring1: {},
      ring2: {},
      ring3: {},
      ring4: {},
      belt: {},
      rightHand: {},
      leftHand: {},
      money: {
        copper: 10,
        silver: 10,
        gold: 10,
        platinum: 10,
        titanium: 10,
        moonStones: 10,
        soffits: 10,
        DeathPearls: 10,
        Sotasill: 1,
      },
    },
  },
};
