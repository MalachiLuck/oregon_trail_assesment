class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food += 2
    }   
    eat () {
        if(this.food >= 1){
            this.isHealthy = true
        }
        else{
            return this.isHealthy = false
        }
       this.food -= 1
    }
}   