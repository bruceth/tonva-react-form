var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import '../css/va-badge.css';
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.render = function () {
        var _a = this.props, className = _a.className, badge = _a.badge, size = _a.size, color = _a.color, badgeAlign = _a.badgeAlign, badgeVertical = _a.badgeVertical, children = _a.children;
        var cn = classNames(className, 'va-badge', size && 'va-badge-' + size, 'va-badge-' + (color || 'secondary'), badgeAlign && 'va-badg-' + badgeAlign, badgeVertical && 'va-badg-' + badgeVertical);
        var b;
        if (badge)
            b = React.createElement("b", null, badge);
        return React.createElement("div", { className: cn },
            children,
            b);
    };
    Badge = __decorate([
        observer
    ], Badge);
    return Badge;
}(React.Component));
export { Badge };
//# sourceMappingURL=Badge.js.map