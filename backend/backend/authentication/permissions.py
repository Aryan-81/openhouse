from authentication.models import USER_ROLES
from rest_framework.permissions import BasePermission

#permissions match
class IsSchool(BasePermission):
    """
    Allows access only to School.
    """

    def has_permission(self, request, _):
        return bool(request.user and
        request.user.role == USER_ROLES['school'])
        
class IsEvent_head(BasePermission):
    """
    Allows access only to Event_head.
    """

    def has_permission(self, request, _):
        return bool(request.user and
        request.user.role == USER_ROLES['event_head'])
        
class IsAdmin(BasePermission):
    """
    Allows access only to only Admin.
    """

    def has_permission(self, request, _):
        return bool(request.user and
        request.user.role == USER_ROLES['admin'])

