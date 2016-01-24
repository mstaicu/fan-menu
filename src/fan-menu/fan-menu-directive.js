angular.module('projects.fanMenu').directive('fanMenu', function() {
  return {
    restrict: 'E',
    scope: {
      menuItems: '='
    },
    templateUrl: 'fan-menu/fan-menu.html',
    link: function($scope, $element, $attrs) {
      angular.extend($scope, {
        isOpened: false,
        getInitialChildButtonStyles: getInitialChildButtonStyles,
        getFinalChildButtonStyles: getFinalChildButtonStyles,
        getMainButtonStyles: getMainButtonStyles,
        toggleMenu: toggleMenu,
        closeMenu: closeMenu
      });

      var DEG_TO_RAD = 0.0174533,
        MAIN_BUTTON_DIAM = 90,
        CHILD_BUTTON_DIAM = 50,
        NUM_CHILDREN = ($scope.menuItems) ? $scope.menuItems.length : 1,
        M_X = 145,
        M_Y = 100,
        FLY_OUT_RADIUS = 120,
        SEPARATION_ANGLE = 40,
        FAN_ANGLE = (NUM_CHILDREN - 1) * SEPARATION_ANGLE,
        BASE_ANGLE = ((180 - FAN_ANGLE) / 2);

      function toRadians(degrees) {
        return degrees * DEG_TO_RAD;
      }

      function getDeltaPosition(index) {
        var angle = BASE_ANGLE + (index * SEPARATION_ANGLE);

        return {
          deltaX: FLY_OUT_RADIUS * Math.cos(toRadians(angle)) - (CHILD_BUTTON_DIAM / 2),
          deltaY: FLY_OUT_RADIUS * Math.sin(toRadians(angle)) - (CHILD_BUTTON_DIAM / 2)
        }
      }

      function getMainButtonStyles() {
        return {
          width: `${MAIN_BUTTON_DIAM}px`,
          height: `${MAIN_BUTTON_DIAM}px`,
          top: `${M_Y}px`,
          left: `${M_X - (MAIN_BUTTON_DIAM / 2)}px`
        }
      }

      function getInitialChildButtonStyles() {
        return {
          width: `${CHILD_BUTTON_DIAM}px`,
          height: `${CHILD_BUTTON_DIAM}px`,
          top: `${M_Y + 20}px`,
          left: `${M_X - (CHILD_BUTTON_DIAM / 2)}px`
        }
      }

      function getFinalChildButtonStyles(childIndex) {
        var {
          deltaX, deltaY
        } = getDeltaPosition(childIndex);

        return {
          width: `${CHILD_BUTTON_DIAM}px`,
          height: `${CHILD_BUTTON_DIAM}px`,
          top: `${M_Y - deltaY}px`,
          left: `${M_X + deltaX}px`
        }
      }

      function toggleMenu() {
        $scope.isOpened = !$scope.isOpened;
      }

      function closeMenu() {
        $scope.isOpened = false;
      }
    }
  }
});
