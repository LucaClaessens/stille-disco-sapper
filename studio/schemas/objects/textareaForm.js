export default {
    name: 'textareaForm',
    type: 'object',
    title: 'Single textarea form',
    description: 'A form containing a single textarea field that can be submitted',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of the field',
            description: 'Pick a unique name for this field',
            required: true,
        },
        {
            name: 'label',
            type: 'string',
            title: 'Label',
            description: 'A label to describe the field, for SEO and Accessibility purposes',
            required: true,
        },
        {
            name: 'placeholder',
            required: true,
            type: 'string',
            title: 'Placeholder value',
        },
        {
            name: 'buttonText',
            required: true,
            type: 'string',
            title: 'Button text',
            description: 'The text to display in the submit button'
        },
        {
            name: 'privacyStatementRequired',
            required: true,
            type: 'boolean',
            title: 'Privacy statement needed',
            description: 'The user needs to tick a checkbox to confirm agreeing to the privacy statement to submit this form'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'label'
        }
    }
}
