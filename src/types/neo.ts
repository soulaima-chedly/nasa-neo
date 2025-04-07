export interface Neo {
    near_earth_objects: NearEarthObject[]
}

export interface NearEarthObject {
    name: string
    estimated_diameter: EstimatedDiameter
}

export interface EstimatedDiameter {
    kilometers: Kilometers
    meters: Meters
    miles: Miles
    feet: Feet
}

export interface Kilometers {
    estimated_diameter_min: number
    estimated_diameter_max: number
}

export interface Meters {
    estimated_diameter_min: number
    estimated_diameter_max: number
}

export interface Miles {
    estimated_diameter_min: number
    estimated_diameter_max: number
}

export interface Feet {
    estimated_diameter_min: number
    estimated_diameter_max: number
}

export type ParsedNearEarthObject = {
    name: string,
    minDiameter: number,
    maxDiameter: number,
    avgDiameter: number
}  
