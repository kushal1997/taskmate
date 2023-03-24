import "../components/showTask.css"

export const ShowTask = () => {
    const tasks = [
        { id: 10001, name: "TASK 1", time: "2:09:22 PM 24/03/2023" },
        { id: 10002, name: "TASK 2", time: "2:09:22 PM 24/03/2023" },
        { id: 10003, name: "TASK 3", time: "2:09:22 PM 24/03/2023" }
    ]
    return (
        <section className="showTask">
            <p className="head">
                <span>
                    <span className="title">To-Do</span>
                    <span className="count">0</span>
                </span>
                <button className="clearAll">Clear All</button>
            </p>
            <ul>
                {tasks.map((task) => (
                    <li>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i class="bi bi-pencil-square"></i>
                        <i class="bi bi-trash"></i>
                    </li>

                ))}

            </ul>

        </section>
    )
}
