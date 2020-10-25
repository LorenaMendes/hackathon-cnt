enum ResearchRoadDataType {
    START = 1,
    FINISH = 2
}

export interface IResearch {
    id: string;
    form: string
    data: Date
    state: string
    felxible: boolean
    hard: boolean
    roadName: string
    route: number
    roadDatas: IResearchRoadData[]
    roadIntervals: IRoadInterval[]
    createdAt: Date
}
export interface IResearchHeader {
    id: string;
    form: string
    data: Date
    state: string
    felxible: boolean
    hard: boolean
    roadName: string
    route: number
    roadDatas: IResearchRoadData[]
    roadIntervals: IRoadInterval[]
    createdAt: Date
}

export interface IResearchRoadData {
    id: string
    km: string
    date: Date
    city: string
    type: ResearchRoadDataType
    researchId: string
    createdAt: Date
}

export interface IRoadInterval {
    id: string
    km: number
    start: string
    finish: string
    gps: string
    latitude: string
    logintude: string
    data: IResearchRoadData
    createdAt: Date
}