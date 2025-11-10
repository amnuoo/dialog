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
                    // ✅ Client-side validation
                    if (!values.feedback || values.feedback.trim() === "") {
                        frappe.throw(__('Please enter feedback before submitting.'));
                        return;
                    }

                    frappe.call({
                        method: "dialog.dialog.codes.salesorder.save_feedback",
                        args: {
                            sales_order: frm.doc.name,
                            feedback: values.feedback
                        },
                        callback: function (r) {
                            if (!r.exc) {
                                frappe.msgprint(__('Feedback saved successfully!'));
                                d.hide();
                                frm.reload_doc();
                            }
                        }
                    });
                }
            });
            d.show();
        });
    }
});
