
export const age = (planet, seconds) => {

    let yearSecs = 31557600
    let periodRatio = new Map

    periodRatio.set("mercury", 0.2408467)
    periodRatio.set("venus", 0.61519726)
    periodRatio.set("earth", 1.0)
    periodRatio.set("mars", 1.8808158)
    periodRatio.set("jupiter", 11.862615)
    periodRatio.set("saturn", 29.447498)
    periodRatio.set("uranus", 84.016846)
    periodRatio.set("neptune", 164.79132)

    return Number((seconds/yearSecs/periodRatio.get(planet.toLowerCase())).toFixed(2))
};
