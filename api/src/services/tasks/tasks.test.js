import { tasks, task, createTask, updateTask, deleteTask } from './tasks'

describe('tasks', () => {
  scenario('returns all tasks', async (scenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })

  scenario('returns a single task', async (scenario) => {
    const result = await task({ id: scenario.task.one.id })

    expect(result).toEqual(scenario.task.one)
  })

  scenario('creates a task', async (scenario) => {
    const result = await createTask({
      input: {
        task: 'String',
        project: 'String',
        start: '2021-04-20T13:04:48Z',
        due: '2021-04-20T13:04:48Z',
      },
    })

    expect(result.task).toEqual('String')
    expect(result.project).toEqual('String')
    expect(result.start).toEqual('2021-04-20T13:04:48Z')
    expect(result.due).toEqual('2021-04-20T13:04:48Z')
  })

  scenario('updates a task', async (scenario) => {
    const original = await task({ id: scenario.task.one.id })
    const result = await updateTask({
      id: original.id,
      input: { task: 'String2' },
    })

    expect(result.task).toEqual('String2')
  })

  scenario('deletes a task', async (scenario) => {
    const original = await deleteTask({ id: scenario.task.one.id })
    const result = await task({ id: original.id })

    expect(result).toEqual(null)
  })
})
