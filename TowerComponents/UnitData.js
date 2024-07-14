export default {
    Skeleton: {
        Health: 30,
        Speed: 4,
        Range: 2,
        Detections: {
            Hidden: false,
        },
        Attributes: {},
    },
    'Sword Skeleton': {
        Health: 30,
        Speed: 4,
        Range: 6,
        Cooldown: 0.8,
        Damage: 15,
        Detections: {
            Hidden: true,
        },
        Attributes: {},
    },
    'Skeleton Knight': {
        Health: 100,
        Speed: 3.5,
        Range: 7,
        Cooldown: 0.65,
        Damage: 35,
        Detections: {
            Hidden: true,
        },
        Attributes: {},
    },
    'Hallow Guard': {
        Health: 1250,
        Speed: 1.8,
        Range: 2,
        Detections: {
            Hidden: false,
        },
        Attributes: {},
    },
    'Executioner Skeleton': {
        Health: 3500,
        Speed: 1.8,
        Cooldown: 4,
        Range: 30,
        Damage: 50,
        Detections: {
            Hidden: true,
        },
        Attributes: {},
    },

    Goon1: {
        Range: 14,
        Health: 10,
        Cooldown: 1,
        Damage: 2,
    },
    Goon2: {
        Range: 16,
        Health: 35,
        Cooldown: 0.25,
        Damage: 3,
    },
    Goon3: {
        Range: 18,
        Health: 50,
        Cooldown: 0.18,
        Damage: 4,
    },
    GoldenGoon1: {
        Range: 14,
        Health: 15,
        Cooldown: 1,
        Damage: 2,
    },
    GoldenGoon2: {
        Range: 16,
        Health: 40,
        Cooldown: 0.22,
        Damage: 4,
    },
    GoldenGoon3: {
        Range: 18,
        Health: 65,
        Cooldown: 0.15,
        Damage: 5,
    },
    // Mercenary base
    Rifleman1: {
        Unlocks: 0,
        Health: 35,
        Damage: 4,
        BurstAmount: 5,
        Spawnrate: 37.5,
        Cooldown: 0.15,
        BurstCooldown: 1.75,
        Range: 18,
        Hidden: false,
        Flying: false,
        Lead: false,
    },
    Rifleman2: {
        Unlocks: 3,
        Health: 70,
        Damage: 9,
        BurstAmount: 6,
        Spawnrate: 32.5,
        Cooldown: 0.15,
        BurstCooldown: 1.5,
        Range: 23,
        Hidden: true,
        Flying: true,
        Lead: false,
    },
    Rifleman3: {
        Unlocks: 6,
        Health: 195,
        Damage: 12,
        BurstAmount: 7,
        Spawnrate: 27.5,
        Cooldown: 0.15,
        BurstCooldown: 1.25,
        Range: 30,
        Hidden: true,
        Flying: true,
        Lead: false,
    },
    Grenadier1: {
        Unlocks: 2,
        Health: 45,
        Damage: 30,
        Spawnrate: 42.5,
        Cooldown: 2,
        Defense: 0,
        Range: 17,
        ExplosiveRange: 3,
        Hidden: false,
        Flying: false,
        Lead: true,
    },
    Grenadier2: {
        Unlocks: 3,
        Health: 120,
        Damage: 50,
        Spawnrate: 37.5,
        Cooldown: 1.75,
        Defense: 0,
        Range: 19,
        ExplosiveRange: 4.5,
        Hidden: false,
        Flying: false,
        Lead: true,
    },
    Grenadier3: {
        Unlocks: 6,
        Health: 260,
        Damage: 65,
        Spawnrate: 32.5,
        Cooldown: 1.25,
        Defense: 0.1,
        Range: 21,
        ExplosiveRange: 4.5,
        Hidden: false,
        Flying: false,
        Lead: true,
    },

    RiotGuard1: {
        Unlocks: 4,
        Health: 1000,
        Damage: 20,
        Spawnrate: 60,
        Defense: 0.1,
        Cooldown: 1.5,
        Range: 4,
        Hidden: false,
        Flying: false,
        Lead: false,
    },
    RiotGuard2: {
        Unlocks: 6,
        Health: 2250,
        Damage: 30,
        Spawnrate: 50,
        Defense: 0.15,
        Cooldown: 1,
        Range: 4,
        Hidden: false,
        Flying: false,
        Lead: false,
    },

    FieldMedic1: {
        Unlocks: 5,
        Health: 135,
        Damage: 0,
        Spawnrate: 37.5,
        Heal: 4,
        MaxTargets: 4,
        Cooldown: 0.2,
        Range: 25,
        Hidden: false,
        Flying: false,
        Lead: false,
    },
    FieldMedic2: {
        Unlocks: 6,
        Health: 175,
        Damage: 0,
        Spawnrate: 32.5,
        Heal: 8,
        MaxTargets: 8,
        Cooldown: 0.2,
        Range: 25,
        Hidden: false,
        Flying: false,
        Lead: false,
    },

    Sentry1: {
        Range: 18,
        Health: 20,
        Lifetime: 20,
        Speed: 1.25,
        IgnoreCollisionDamage: true,
        Cooldown: 0.45,
        Damage: 1,
        Detections: {
            Hidden: false,
        },
        Attributes: {
            SendTime: 1.25,
            ScrapCost: 16,
            Lifetime: 20,
        },
    },
    Sentry2: {
        Range: 20,
        Health: 40,
        Lifetime: 30,
        Speed: 1.25,
        IgnoreCollisionDamage: true,
        Cooldown: 0.25,
        Damage: 2,
        Detections: {
            Hidden: false,
        },
        Attributes: {
            SendTime: 1.5,
            ScrapCost: 36,
            Lifetime: 30,
        },
    },
    Sentry3: {
        Range: 20,
        Health: 60,
        Lifetime: 45,
        Speed: 1.25,
        IgnoreCollisionDamage: true,
        Cooldown: 0.16,
        Damage: 5,
        Detections: {
            Hidden: true,
        },
        Attributes: {
            SendTime: 1.75,
            ScrapCost: 140,
            Lifetime: 45,
        },
    },
    Sentry4: {
        ExplosionDamage: 35,
        TimeBetweenMissiles: 4,
        MissileAmount: 2,
        Range: 24,
        Health: 120,
        Lifetime: 60,
        Speed: 1.5,
        IgnoreCollisionDamage: true,
        Cooldown: 0.115,
        Damage: 9,
        Detections: {
            Hidden: true,
        },
        Attributes: {
            SendTime: 1.75,
            ScrapCost: 300,
            Lifetime: 60,
        },
    },
    Humvee: {
        Health: 30,
        Damage: 0,
        Cooldown: 0.2,
        Range: 5,
    },
    ['Humvee 2']: {
        Health: 60,
        Damage: 0,
        Cooldown: 0.2,
        Range: 5,
    },
    ['Humvee 3']: {
        Health: 90,
        Damage: 3,
        Cooldown: 0.2,
        Range: 30,
    },
    Tank: {
        Health: 500,
        Damage: 10,
        Cooldown: 0.2,
        Range: 30,
        ExplosionDamage: 50,
        TimeBetweenMissiles: 3,
    },
    ['Railgun Tank']: {
        Health: 1500,
        Damage: 24,
        Cooldown: 0.15,
        Range: 30,
        ExplosionDamage: 80,
        TimeBetweenMissiles: 3,
    },
    Mark1: {
        Health: 400,
        Damage: 8,
        Cooldown: 0.2,
        Range: 30,
    },
    Mark1Rocket: {
        Health: 400,
        Damage: 8,
        Cooldown: 0.2,
        Range: 30,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 5,
    },
    Mark2: {
        Health: 750,
        Damage: 12,
        Cooldown: 0.15,
        Range: 25,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 5,
    },
    Mark3: {
        Health: 1200,
        Damage: 10,
        Cooldown: 0.08,
        Range: 25,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
    },
    Mark4: {
        Health: 2000,
        Damage: 10,
        Cooldown: 0.05,
        Range: 100,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        MissileAmount: 4,
    },
    Mark5: {
        Health: 5000,
        Damage: 20,
        Cooldown: 0.05,
        Range: 100,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        MissileAmount: 4,
    },
};
