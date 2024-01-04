function skillMember() {
  return {
    restrict: 'E',
    templateUrl: 'skill-member.html'
    controller: 'SkillMemberController',
    controllerAs : 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  }
  
}