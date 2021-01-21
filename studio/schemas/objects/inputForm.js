export default {
    name: 'inputForm',
    type: 'object',
    title: 'Single input area form',
    description: 'A form containing a single input field that can be submitted',
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
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'label'
        }
    }
}
