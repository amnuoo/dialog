import frappe
from frappe import _

@frappe.whitelist()
def save_feedback(sales_order, feedback):
    if not feedback or not feedback.strip():
        frappe.throw(_("Feedback is required before submitting."))

        so = frappe.get_doc("Sales Order", sales_order)

    child = so.append("feedback_table", {})
    child.feedback = feedback

    so.save()
    frappe.db.commit()

    return _("Feedback saved successfully.")
