import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const TaskForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.task?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="task"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Task
        </Label>
        <TextField
          name="task"
          defaultValue={props.task?.task}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="task" className="rw-field-error" />

        <Label
          name="project"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project
        </Label>
        <TextField
          name="project"
          defaultValue={props.task?.project}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="project" className="rw-field-error" />

        <Label
          name="start"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start
        </Label>
        <DatetimeLocalField
          name="start"
          defaultValue={formatDatetime(props.task?.start)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="start" className="rw-field-error" />

        <Label
          name="due"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Due
        </Label>
        <DatetimeLocalField
          name="due"
          defaultValue={formatDatetime(props.task?.due)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="due" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaskForm
