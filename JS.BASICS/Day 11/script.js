class Scheduler {
    constructor() {
        this.tasks = new Map(); // Task name -> metadata
        this.completed = new Set(); // Unique completed tasks
    }

    addTask(name, deadline) {
        if (this.tasks.has(name)) {
            console.log("Task already exists!");
            return;
        }
        this.tasks.set(name, { deadline });
        console.log(`Task '${name}' added.`);
    }

    completeTask(name) {
        if (!this.tasks.has(name)) {
            console.log("Task does not exist!");
            return;
        }
        this.completed.add(name);
        console.log(`Task '${name}' completed.`);
    }

    listTasks() {
        console.log("Pending Tasks:");
        for (const [task, details] of this.tasks.entries()) {
            if (!this.completed.has(task)) {
                console.log(`${task}: Deadline - ${details.deadline}`);
            }
        }
    }
}

const myScheduler = new Scheduler();
myScheduler.addTask("Project Report", "2024-11-30");
myScheduler.addTask("Team Meeting", "2024-11-29");
myScheduler.completeTask("Project Report");
myScheduler.listTasks();