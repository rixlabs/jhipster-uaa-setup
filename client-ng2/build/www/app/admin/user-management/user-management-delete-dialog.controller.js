(function () {
    'use strict';
    angular
        .module('uaaSetupApp.admin')
        .controller('UserManagementDeleteController', UserManagementDeleteController);
    UserManagementDeleteController.$inject = ['$uibModalInstance', 'entity', 'User'];
    function UserManagementDeleteController($uibModalInstance, entity, User) {
        var vm = this;
        vm.user = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        function clear() {
            $uibModalInstance.dismiss('cancel');
        }
        function confirmDelete(login) {
            User.delete({ login: login }, function () {
                $uibModalInstance.close(true);
            });
        }
    }
})();

//# sourceMappingURL=user-management-delete-dialog.controller.js.map
