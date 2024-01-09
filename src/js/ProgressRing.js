class ProgressRing extends HTMLElement {
  constructor() {
    super();
    const color = this.getAttribute('color') || '#000';
    const stroke = this.getAttribute('stroke') || 2;
    const radius = this.getAttribute('radius') || 50;

    this.render(color, stroke, radius)
  }

  render(color, stroke, radius) {
    const normalizedRadius = radius - stroke * 2;
    this._circumference = normalizedRadius * 2 * Math.PI;

    this._root = this.attachShadow({mode: 'open'});
    this._root.innerHTML = `
      <svg
        height="${radius * 2}"
        width="${radius * 2}"
       >
         <circle
           stroke="${color}"
           stroke-dasharray="${this._circumference} ${this._circumference}"
           style="stroke-dashoffset:${this._circumference}"
           stroke-width="${stroke}"
           fill="transparent"
           r="${normalizedRadius}"
           cx="${radius}"
           cy="${radius}"
        />
      </svg>

      <style>
        circle {
          transition: stroke-dashoffset 0.05s;
          transform: rotate(90deg) scaleX(-1);
          transform-origin: 50% 50%;
        }
      </style>
    `;
  }
  
  setProgress(percent) {
    const offset = this._circumference - (percent / 100 * this._circumference);
    const circle = this._root.querySelector('circle');
    circle.style.strokeDashoffset = offset; 
  }

  setColor(oldVal, newVal) {
    const regex = /stroke="(?:#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|(?:rgb|hsl)a?\([^)]*\)|[a-zA-Z]+)"/;
    this._root.innerHTML = this._root.innerHTML.replace(regex, `stroke="${newVal}"`);
  }

  static get observedAttributes() {
    return ['progress', 'color', 'stroke'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    //console.log(name);
    if (name === 'progress') {
      this.setProgress(newValue);
    }
    if(name === 'color') {
      this.setColor(oldValue, newValue);
    }
  }
}

export { ProgressRing as default};

