frappe.ui.form.on('Sales Order', {
    refresh(frm) {
        frm.add_custom_button('Add Feedback', () => {
            frappe.msgprint(__('Feedback button clicked!'));
        });
    }
});
frappe.ui.form.on('Sales Order', {
    refresh(frm) {
        frm.add_custom_button('Add Feedback', () => {
            let d = new frappe.ui.Dialog({
                title: 'Add Feedback',
                fields: [
                    {
                        label: 'Feedback',
                        fieldname: 'feedback',
                        fieldtype: 'Small Text',
                    }
                ],
                primary_action_label: 'Submit',
                primary_action(values) {
                    if (!values.feedback || values.feedback.trim() === "") {
                        frappe.throw(__('Please enter feedback before submitting.'));
                        return;
                    }

                    frappe.msgprint(__('Feedback: ') + values.feedback);
                    d.hide();
                }
            });

            d.show();
        });
    }
});
