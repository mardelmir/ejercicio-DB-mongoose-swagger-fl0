module.exports = {
    components: {
        schemas: {
            Task: {
                _id: {
                    type: 'objectId',
                    description: 'Task identification number',
                    example: '65cc8877b29e9b16947c84d2'
                },
                title: {
                    type: 'string',
                    description: 'Name for the task',
                    example: 'Tarea 1'
                },
                completed: {
                    type: 'boolean',
                    description: 'Indicates if the task has been completed (true) or not (false)',
                    example: 'true'
                },
                createdAt: {
                    type: 'date',
                    description: 'Moment the task was created',
                    example: '2024-02-14T09:31:35.086+00:00'
                },
                updatedAt: {
                    type: 'date',
                    description: 'Moment the task was last modified',
                    example: '2024-02-14T09:31:35.086+00:00'
                },
                __v0: {
                    type: 'number',
                    description: 'Moment the task was last modified',
                    example: '2024-02-14T09:31:35.086+00:00'
                }
            }
        }
    }
}