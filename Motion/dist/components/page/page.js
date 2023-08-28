import { BaseComponent } from "../component.js";
class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-item">
    <section class="page-item__body">
      <div class="page-item__controls">
        <button class="close">x</button>
      </div>
    </section>
  </li>`);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
        console.log("listener", this.closeListener);
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super('<ul class="page">This is PageComponent</ul>');
    }
    addChild(section) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListener(() => {
            console.log("ii", this.element);
            item.removeFrom(this.element);
        });
    }
}
