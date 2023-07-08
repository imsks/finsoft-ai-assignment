import { TimeDurationInterface } from "@/interfaces"

const dummyData = {
    META: {
        day1: 50,
        day7: 70,
        day14: 65,
        day30: 80
    },
    AMZN: {
        day1: 80,
        day7: 60,
        day14: 75,
        day30: 90
    },
    NTFLX: {
        day1: 40,
        day7: 55,
        day14: 70,
        day30: 50
    },
    APPL: {
        day1: 70,
        day7: 80,
        day14: 60,
        day30: 85
    },
    MS: {
        day1: 90,
        day7: 65,
        day14: 55,
        day30: 75
    }
}

const timeDuration: TimeDurationInterface[] = [
    {
        label: "Day 1",
        value: "day1"
    },
    {
        label: "Day 7",
        value: "day7"
    },
    {
        label: "Day 14",
        value: "day14"
    },
    {
        label: "Day 30",
        value: "day30"
    }
]

const stockLabels = ["META", "AMZN", "NTFLX", "APPL", "MS"]

export { dummyData, timeDuration, stockLabels }
