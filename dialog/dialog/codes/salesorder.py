import frappe
from frappe import _

@frappe.whitelist()
def save_feedback(sales_order, feedback):
    if not feedback or not feedback.strip():
        frappe.throw(_("Feedback is required before submitting."))
