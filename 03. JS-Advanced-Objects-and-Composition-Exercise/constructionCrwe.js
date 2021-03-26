function solve(Worker) {
    if (Worker.dizziness) {
        Worker.levelOfHydrated += Worker.weight * 0.1 * Worker.experience;
        Worker.dizziness = false;
    }
    return Worker
}
console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));