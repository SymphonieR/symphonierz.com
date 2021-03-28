class FormSectionData {
    constructor (title, fieldsetsGrid) {
        this.title = title
        this.fieldsetsGrid = []
        if (!(fieldsetsGrid instanceof Array)) {
            return
        }

        for (let row = 0; row < fieldsetsGrid.length; row++) {
            let fieldsetsGridRow = []
            if (!(fieldsetsGrid instanceof Array)) {
                continue
            }

            for (let col = 0; col < fieldsetsGrid[row].length; col++) {
                if (fieldsetsGrid[row][col] instanceof FormFieldset) {
                    fieldsetsGridRow.push(fieldsetsGrid[row][col])
                }
            }

            if (fieldsetsGridRow.length > 0) {
                this.fieldsetsGrid.push(fieldsetsGridRow)
            }
        }
    }
}

class FormFieldset {
}

class FormFieldsetCheckboxList extends FormFieldset {
    constructor (items) {
        super()

        this.items = []
        if (items instanceof Array) {
            for (let i = 0; i < items.length; i++) {
                if (items[i] instanceof FormFieldsetCheckboxData) {
                    this.items.push(items[i])
                }
            }
        }
    }
}

class FormFieldsetCheckboxData {
    constructor (name, icon) {
        this.name = name
        this.icon = icon
    }
}

class FormFieldsetInputText extends FormFieldset {
    constructor (label) {
        super()

        this.label = label
    }
}

class FormFieldsetTextArea extends FormFieldset {
    constructor (label) {
        super()

        this.label = label
    }
}

class FormFieldsetInputFile extends FormFieldset {
    constructor (label) {
        super()

        this.label = label
    }
}

export { FormSectionData, FormFieldset, FormFieldsetCheckboxList, FormFieldsetCheckboxData,
    FormFieldsetInputText, FormFieldsetTextArea, FormFieldsetInputFile }
