import { BaseComponent } from "../component.js";
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li draggable="true" class="page-item">
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
        this.element.addEventListener("dragstart", (event) => {
            this.onDragStart(event);
        });
        this.element.addEventListener("dragend", (event) => {
            this.onDragEnd(event);
        });
        this.element.addEventListener("dragenter", (event) => {
            this.onDragEnter(event);
        });
        this.element.addEventListener("dragleave", (event) => {
            this.onDragLeave(event);
        });
    }
    onDragStart(_) {
        this.notifyDragObservers("start");
    }
    onDragEnd(_) {
        this.notifyDragObservers("stop");
    }
    onDragEnter(_) {
        this.notifyDragObservers("enter");
    }
    onDragLeave(_) {
        this.notifyDragObservers("leave");
    }
    notifyDragObservers(state) {
        console.log("state", state);
        this.dragStateListener && this.dragStateListener(this, state);
        console.log("this", this);
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnDragStateListener(listener) {
        console.log("listener", listener);
        this.dragStateListener = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemConstructor) {
        super('<ul class="page"></ul>');
        this.pageItemConstructor = pageItemConstructor;
        this.element.addEventListener("dragover", (event) => {
            this.onDragOver(event);
        });
        this.element.addEventListener("drop", (event) => {
            this.onDrop(event);
        });
    }
    onDragOver(event) {
        event.preventDefault();
    }
    onDrop(event) {
        event.preventDefault();
    }
    addChild(section) {
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
        item.setOnDragStateListener((target, state) => {
            console.log("ss", target, state);
        });
    }
}
