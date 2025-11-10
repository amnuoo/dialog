frappe.ui.form.on('Sales Order', {
    refresh(frm) {
        frm.add_custom_button('Add Feedback', () => {
            frappe.msgprint(__('Feedback button clicked!'));
        });
    }
});
