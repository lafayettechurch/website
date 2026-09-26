/* @ds-bundle: {"format":4,"namespace":"LafayetteChurchDesignSystem_2b98d9","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"FacetMotif","sourcePath":"components/brand/FacetMotif.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Placeholder","sourcePath":"components/feedback/Placeholder.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"FormSuccess","sourcePath":"components/forms/FormSuccess.jsx"},{"name":"SectionBand","sourcePath":"components/layout/SectionBand.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"InfoRow","sourcePath":"components/lists/InfoRow.jsx"},{"name":"RuledList","sourcePath":"components/lists/RuledList.jsx"},{"name":"MapBlock","sourcePath":"components/media/MapBlock.jsx"},{"name":"PhotoFrame","sourcePath":"components/media/PhotoFrame.jsx"},{"name":"VideoFrame","sourcePath":"components/media/VideoFrame.jsx"},{"name":"LeaderProfile","sourcePath":"components/people/LeaderProfile.jsx"},{"name":"PersonCard","sourcePath":"components/people/PersonCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"c02710904b02","components/brand/FacetMotif.jsx":"680daebaf5cb","components/brand/Icon.jsx":"4d45b40dfbb0","components/content/Card.jsx":"b5bdd10e90e3","components/content/Eyebrow.jsx":"1ad3719b7148","components/feedback/Placeholder.jsx":"44f816aab56e","components/feedback/Toast.jsx":"e834d6971541","components/forms/FormField.jsx":"d37094ffd3d5","components/forms/FormSuccess.jsx":"9b309fd035c6","components/layout/SectionBand.jsx":"215ddbfdf26e","components/layout/SiteFooter.jsx":"be708b096788","components/layout/SiteHeader.jsx":"4244b73709fc","components/lists/InfoRow.jsx":"a3fa7fbb6cb0","components/lists/RuledList.jsx":"e8100d30aa63","components/media/MapBlock.jsx":"23678ce90860","components/media/PhotoFrame.jsx":"66cb95fcfafe","components/media/VideoFrame.jsx":"d20a3a48c218","components/people/LeaderProfile.jsx":"2dd579d8d11f","components/people/PersonCard.jsx":"0f1d6ddb6681","ui_kits/website/Give.jsx":"4810357a219f","ui_kits/website/Home.jsx":"1d9fce277532","ui_kits/website/Shared.jsx":"73968f5d2596","ui_kits/website/Visit.jsx":"bce95803a03b","ui_kits/website/Watch.jsx":"524d6691f83d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LafayetteChurchDesignSystem_2b98d9 = window.LafayetteChurchDesignSystem_2b98d9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    bg: 'var(--lcc-clay)',
    hover: 'var(--lcc-clay-hover)',
    fg: '#FFFFFF',
    bd: 'transparent'
  },
  secondary: {
    bg: 'var(--lcc-slate)',
    hover: 'var(--lcc-slate-hover)',
    fg: '#FFFFFF',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    hover: 'rgba(62,90,118,0.08)',
    fg: 'var(--lcc-slate)',
    bd: 'var(--lcc-slate)'
  },
  'outline-on-dark': {
    bg: 'transparent',
    hover: 'rgba(255,255,255,0.08)',
    fg: '#FFFFFF',
    bd: 'var(--lcc-slate-light)'
  }
};
function Button({
  variant = 'secondary',
  size = 'md',
  href,
  icon,
  iconRight,
  disabled,
  fullWidth,
  onClick,
  children,
  style,
  type = 'button'
}) {
  const [h, setH] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const common = {
    href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    'aria-disabled': disabled || undefined,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled
  };
  const fs = size === 'sm' ? 15 : 16;
  const iconEl = n => n ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 18,
      height: 18,
      background: 'currentColor',
      WebkitMask: 'url(https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg) center/contain no-repeat',
      mask: 'url(https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg) center/contain no-repeat'
    }
  }) : null;
  if (variant === 'link') {
    return /*#__PURE__*/React.createElement(Tag, _extends({}, common, {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'none',
        border: 0,
        padding: '0 0 2px',
        borderBottom: '2px solid ' + (h ? 'var(--lcc-clay)' : 'var(--lcc-amber)'),
        color: 'var(--lcc-slate)',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: fs,
        lineHeight: 1.4,
        textDecoration: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? .45 : 1,
        transition: 'border-color 150ms',
        ...style
      }
    }), iconEl(icon), children, iconEl(iconRight));
  }
  const v = V[variant] || V.secondary;
  const pad = size === 'sm' ? '0 20px' : '0 26px';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, common, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      boxSizing: 'border-box',
      minHeight: size === 'sm' ? 44 : 48,
      padding: pad,
      background: h && !disabled ? v.hover : v.bg,
      color: v.fg,
      border: '1.5px solid ' + (v.bd === 'transparent' ? h && !disabled ? v.hover : v.bg : v.bd),
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: fs,
      lineHeight: 1.2,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'background-color 150ms, border-color 150ms',
      ...style
    }
  }), iconEl(icon), children, iconEl(iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/FacetMotif.jsx
try { (() => {
const C = {
  navy: '#1E2A3A',
  slate: '#3E5A76',
  light: '#7890A8',
  clay: '#B4533C',
  amber: '#C98A2E',
  cream: '#F6F1E9'
};
// [top, side, w, h, color, opacity, rotate] — side is right or left offset per anchor
const PRESETS = {
  hero: [['-8%', '4%', 190, 190, 'slate', .85, 12], ['18%', '16%', 130, 130, 'light', .55, -6], ['44%', '2%', 220, 90, 'amber', .4, 9], ['b-12%', '22%', 160, 160, 'clay', .45, -14], ['b6%', '9%', 70, 70, 'cream', .25, 18]],
  corner: [[-20, -10, 150, 150, 'slate', .85, 14], ['b24', 54, 84, 84, 'clay', .6, -9], ['b-18', -14, 100, 100, 'amber', .45, 20]],
  card: [[-30, -20, 120, 120, 'slate', .7, 16], ['b-24', 34, 74, 74, 'amber', .4, -10]],
  soft: [[20, 26, 110, 110, 'slate', .5, -8], [62, 88, 96, 96, 'light', .55, 11], [108, 34, 130, 62, 'amber', .42, -5]],
  accent: [[-14, -14, 70, 70, 'light', .45, 16]]
};
function FacetMotif({
  preset = 'corner',
  anchor = 'right',
  scale = 1,
  opacity = 1,
  style
}) {
  const panes = PRESETS[preset] || PRESETS.corner;
  const px = v => typeof v === 'number' ? v * scale + 'px' : v;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      opacity,
      ...style
    }
  }, panes.map(([t, s, w, h, c, o, r], i) => {
    const bottom = typeof t === 'string' && t[0] === 'b';
    const tv = bottom ? t.slice(1).includes('%') ? t.slice(1) : Number(t.slice(1)) : t;
    const pos = {
      [bottom ? 'bottom' : 'top']: px(tv),
      [anchor === 'left' ? 'left' : 'right']: px(s)
    };
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        ...pos,
        width: w * scale,
        height: h * scale,
        background: C[c],
        opacity: o,
        transform: 'rotate(' + (anchor === 'left' ? -r : r) + 'deg)'
      }
    });
  }));
}
Object.assign(__ds_scope, { FacetMotif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FacetMotif.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
const LUCIDE = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  label,
  style
}) {
  const url = 'url(' + LUCIDE + name + '.svg) center/contain no-repeat';
  return /*#__PURE__*/React.createElement("span", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: url,
      mask: url,
      verticalAlign: 'middle',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
const T = {
  slate: 'var(--lcc-slate)',
  clay: 'var(--lcc-clay-ink)',
  amber: 'var(--lcc-amber-ink)',
  'on-dark': 'var(--lcc-mist-2)'
};
function Eyebrow({
  tone = 'slate',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      lineHeight: 1.4,
      color: T[tone] || T.slate,
      marginBottom: 14,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
const V = {
  default: {
    bg: 'var(--lcc-white)',
    bd: '1px solid var(--lcc-line)',
    fg: 'var(--lcc-navy)',
    body: 'var(--lcc-ink-3)',
    eb: 'slate'
  },
  deep: {
    bg: 'var(--lcc-navy)',
    bd: 'none',
    fg: '#FFFFFF',
    body: 'var(--lcc-mist-2)',
    eb: 'on-dark'
  },
  warm: {
    bg: 'var(--lcc-sand)',
    bd: 'none',
    fg: 'var(--lcc-navy)',
    body: 'var(--lcc-sand-ink)',
    eb: 'amber'
  },
  outline: {
    bg: 'transparent',
    bd: '1px solid var(--lcc-navy-line)',
    fg: '#FFFFFF',
    body: 'var(--lcc-mist-2)',
    eb: 'on-dark'
  }
};
function Card({
  variant = 'default',
  eyebrow,
  title,
  children,
  action,
  facets,
  padding = 30,
  style
}) {
  const v = V[variant] || V.default;
  const showFacets = facets ?? variant === 'deep';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: v.bg,
      border: v.bd,
      borderRadius: 'var(--radius-md)',
      padding,
      color: v.fg,
      fontFamily: 'var(--font-body)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, showFacets && /*#__PURE__*/React.createElement(__ds_scope.FacetMotif, {
    preset: "card"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: v.eb
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 27,
      lineHeight: 1.2,
      margin: '0 0 12px',
      color: v.fg,
      textWrap: 'balance'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: v.body,
      margin: action ? '0 0 22px' : 0,
      flex: 1
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      alignItems: 'center'
    }
  }, action)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Placeholder.jsx
try { (() => {
function Placeholder({
  children = 'Copy needed',
  block,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: block ? 'flex' : 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: block ? '12px 14px' : '1px 8px',
      border: '1px dashed var(--lcc-line-dashed)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--lcc-notice)',
      color: 'var(--lcc-notice-ink)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1.5,
      fontStyle: 'normal',
      letterSpacing: 0,
      verticalAlign: 'baseline',
      ...style
    }
  }, "[", children, "]");
}
Object.assign(__ds_scope, { Placeholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Placeholder.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  open = true,
  children,
  icon = 'circle-check',
  duration = 4000,
  onClose,
  inline,
  style
}) {
  React.useEffect(() => {
    if (open && duration && onClose) {
      const t = setTimeout(onClose, duration);
      return () => clearTimeout(t);
    }
  }, [open, duration, onClose]);
  if (!open) return null;
  const pos = inline ? {
    position: 'relative'
  } : {
    position: 'fixed',
    left: '50%',
    bottom: 24,
    transform: 'translateX(-50%)',
    zIndex: 50
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      ...pos,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      maxWidth: 'calc(100vw - 32px)',
      boxSizing: 'border-box',
      background: 'var(--lcc-navy)',
      color: '#FFFFFF',
      borderRadius: 'var(--radius-md)',
      padding: '12px 18px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.4,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--lcc-mist)"
  }), /*#__PURE__*/React.createElement("span", null, children), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      marginLeft: 6,
      width: 28,
      height: 28,
      display: 'grid',
      placeItems: 'center',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    color: "var(--lcc-mist-2)"
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const box = {
  width: '100%',
  boxSizing: 'border-box',
  minHeight: 48,
  padding: '0 14px',
  border: '1px solid var(--lcc-slate-light)',
  borderRadius: 'var(--radius-sm)',
  background: '#FFFFFF',
  color: 'var(--lcc-navy)',
  fontFamily: 'var(--font-body)',
  fontSize: 16,
  lineHeight: 1.4
};
function FormField({
  type = 'text',
  label,
  name,
  options = [],
  placeholder,
  hint,
  required,
  value,
  defaultValue,
  onChange,
  rows = 4,
  style
}) {
  const id = React.useId ? React.useId() : name;
  const lab = /*#__PURE__*/React.createElement("label", {
    htmlFor: type === 'radio' ? undefined : id,
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.4,
      color: 'var(--lcc-navy)',
      marginBottom: 6
    }
  }, label, required ? '' : /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--lcc-ink-3)'
    }
  }, " (optional)"));
  const common = {
    id,
    name,
    required,
    value,
    defaultValue,
    placeholder,
    onChange: onChange ? e => onChange(e.target.value, e) : undefined
  };
  let control;
  if (type === 'textarea') control = /*#__PURE__*/React.createElement("textarea", _extends({}, common, {
    rows: rows,
    style: {
      ...box,
      padding: '12px 14px',
      resize: 'vertical',
      minHeight: 120
    }
  }));else if (type === 'select') control = /*#__PURE__*/React.createElement("select", _extends({}, common, {
    style: {
      ...box,
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingRight: 40,
      backgroundImage: 'linear-gradient(45deg, transparent 50%, #3E5A76 50%), linear-gradient(135deg, #3E5A76 50%, transparent 50%)',
      backgroundPosition: 'calc(100% - 20px) 50%, calc(100% - 15px) 50%',
      backgroundSize: '5px 5px',
      backgroundRepeat: 'no-repeat'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, typeof o === 'string' ? o : o.label);
  }));else if (type === 'radio') control = /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": typeof label === 'string' ? label : undefined,
    style: {
      display: 'grid',
      gap: 8
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        ...box,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      required: required,
      defaultChecked: defaultValue === v,
      checked: value === undefined ? undefined : value === v,
      onChange: onChange ? e => onChange(e.target.value, e) : undefined,
      style: {
        width: 18,
        height: 18,
        margin: 0,
        accentColor: 'var(--lcc-slate)'
      }
    }), /*#__PURE__*/React.createElement("span", null, typeof o === 'string' ? o : o.label));
  }));else control = /*#__PURE__*/React.createElement("input", _extends({}, common, {
    type: type,
    style: box
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      minWidth: 0,
      ...style
    }
  }, type === 'radio' ? /*#__PURE__*/React.createElement("div", null, lab) : lab, control, hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--lcc-ink-3)',
      marginTop: 6
    }
  }, hint));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormSuccess.jsx
try { (() => {
function FormSuccess({
  title = 'Thank you — we got it.',
  children,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      background: 'var(--lcc-sand)',
      borderRadius: 'var(--radius-md)',
      padding: 28,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check",
    size: 28,
    color: "var(--lcc-slate)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.25,
      color: 'var(--lcc-navy)',
      marginBottom: children ? 8 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--lcc-sand-ink)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, action)));
}
Object.assign(__ds_scope, { FormSuccess });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormSuccess.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionBand.jsx
try { (() => {
const T = {
  cream: {
    bg: 'var(--lcc-cream)',
    fg: 'var(--lcc-navy)',
    lede: 'var(--lcc-ink-2)',
    rule: 'var(--lcc-line-strong)',
    num: 'var(--lcc-slate)',
    eb: 'clay'
  },
  white: {
    bg: 'var(--lcc-white)',
    fg: 'var(--lcc-navy)',
    lede: 'var(--lcc-ink-2)',
    rule: 'var(--lcc-line)',
    num: 'var(--lcc-slate)',
    eb: 'clay'
  },
  warm: {
    bg: 'var(--lcc-sand)',
    fg: 'var(--lcc-navy)',
    lede: 'var(--lcc-sand-ink)',
    rule: 'var(--lcc-notice-line)',
    num: 'var(--lcc-amber-ink)',
    eb: 'amber'
  },
  deep: {
    bg: 'var(--lcc-navy)',
    fg: '#FFFFFF',
    lede: 'var(--lcc-mist)',
    rule: 'var(--lcc-navy-line)',
    num: 'var(--lcc-mist-2)',
    eb: 'on-dark'
  },
  brand: {
    bg: 'var(--lcc-slate)',
    fg: '#FFFFFF',
    lede: 'var(--lcc-mist-3)',
    rule: 'rgba(255,255,255,0.2)',
    num: 'var(--lcc-mist-slate)',
    eb: 'on-dark'
  }
};
function SectionBand({
  tone = 'cream',
  number,
  eyebrow,
  title,
  lede,
  facets,
  ruled,
  children,
  id,
  padY,
  style
}) {
  const t = T[tone] || T.cream;
  const dark = tone === 'deep' || tone === 'brand';
  const hasHead = number || eyebrow || title || lede;
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: t.bg,
      color: t.fg,
      padding: (padY || 'var(--section-pad)') + ' var(--gutter)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, facets && /*#__PURE__*/React.createElement(__ds_scope.FacetMotif, {
    preset: dark ? 'corner' : 'soft',
    opacity: dark ? 1 : .8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, hasHead && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40,
      ...(ruled || number ? {
        borderTop: '1px solid ' + t.rule,
        paddingTop: 28
      } : {})
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: t.eb === 'on-dark' ? 'on-dark' : t.eb
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      color: t.num
    }
  }, number), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(26px, 3.2vw, 38px)',
      lineHeight: 1.1,
      letterSpacing: '-0.015em',
      margin: 0,
      maxWidth: '22ch',
      textWrap: 'balance'
    }
  }, title)), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      color: t.lede,
      maxWidth: '62ch',
      margin: '20px 0 0'
    }
  }, lede)), children));
}
Object.assign(__ds_scope, { SectionBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
const col = {
  fontSize: 12,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  fontWeight: 700,
  color: 'var(--lcc-mist-2)',
  marginBottom: 14
};
const DEFAULT_LINKS = [{
  label: 'Plan your visit',
  href: '#visit'
}, {
  label: 'Watch',
  href: '#watch'
}, {
  label: 'What we believe',
  href: '#about'
}, {
  label: 'Give',
  href: '#give'
}, {
  label: 'Contact',
  href: '#contact'
}];
function SiteFooter({
  logoSrc = 'assets/logo-white.png',
  links = DEFAULT_LINKS,
  facebook = '#',
  instagram = '#',
  onNavigate,
  style
}) {
  const nav = l => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l);
    }
  };
  const icon = n => /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      background: 'currentColor',
      WebkitMask: 'url(https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg) center/contain no-repeat',
      mask: 'url(https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg) center/contain no-repeat'
    }
  });
  const a = {
    color: '#FFFFFF',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--lcc-navy)',
      color: '#FFFFFF',
      fontFamily: 'var(--font-body)',
      padding: 'clamp(56px, 8vw, 88px) var(--gutter) 40px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 40,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Lafayette Church of Christ",
    style: {
      display: 'block',
      height: 64,
      width: 'auto',
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 26,
      lineHeight: 1.3,
      color: 'var(--lcc-mist)',
      margin: 0,
      maxWidth: '22ch'
    }
  }, "A Jesus-community of life, light, and love.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: col
  }, "Gather with us"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--lcc-mist)'
    }
  }, "Sundays at 10 AM \xB7 worship", /*#__PURE__*/React.createElement("br", null), "Bible classes at 9 AM", /*#__PURE__*/React.createElement("br", null), "Wednesdays at 7 PM \xB7 Bible study"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--lcc-mist)',
      marginTop: 14
    }
  }, "115 New Ballwin Road", /*#__PURE__*/React.createElement("br", null), "Ballwin, MO 63021")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: col
  }, "Quick links"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      fontSize: 15
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: nav(l),
    style: a
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--lcc-navy-line)',
      paddingTop: 24,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--lcc-mist-2)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "In Ballwin since 1962"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: facebook,
    style: {
      ...a,
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      color: 'var(--lcc-mist)'
    }
  }, icon('facebook'), "Facebook"), /*#__PURE__*/React.createElement("a", {
    href: instagram,
    style: {
      ...a,
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      color: 'var(--lcc-mist)'
    }
  }, icon('instagram'), "Instagram")))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
const DEFAULT_LINKS = [{
  label: "I'm new",
  href: '#new'
}, {
  label: 'Watch',
  href: '#watch'
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Times & location',
  href: '#visit'
}, {
  label: 'Give',
  href: '#give'
}];
function SiteHeader({
  links = DEFAULT_LINKS,
  active,
  logoSrc = 'assets/logo-color-trimmed.png',
  markSrc = 'assets/logo-icon.jpeg',
  ctaLabel = 'Plan your visit',
  onCta,
  onNavigate,
  compact,
  sticky = true,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const nav = l => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l);
    }
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 30,
      background: 'rgba(246,241,233,0.92)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--lcc-line-strong)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      minHeight: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav({
      label: 'Home',
      href: '#'
    }),
    style: {
      display: 'flex',
      alignItems: 'center',
      flex: 'none'
    }
  }, compact ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Lafayette Church of Christ",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Lafayette Church of Christ",
    style: {
      height: 48,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center',
      marginLeft: 'auto',
      fontSize: 15,
      fontWeight: 500
    },
    className: "lcc-header-nav"
  }, !compact && links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: nav(l),
    style: {
      color: active === l.label ? 'var(--lcc-navy)' : 'var(--lcc-slate)',
      textDecoration: 'none',
      padding: '12px 0',
      borderBottom: active === l.label ? '2px solid var(--lcc-amber)' : '2px solid transparent'
    }
  }, l.label))), !compact && ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, ctaLabel), compact && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, ctaLabel), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      width: 48,
      height: 48,
      border: '1.5px solid var(--lcc-slate)',
      borderRadius: 3,
      background: 'transparent',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      background: 'var(--lcc-slate)',
      WebkitMask: 'url(https://unpkg.com/lucide-static@0.460.0/icons/' + (open ? 'x' : 'menu') + '.svg) center/contain no-repeat',
      mask: 'url(https://unpkg.com/lucide-static@0.460.0/icons/' + (open ? 'x' : 'menu') + '.svg) center/contain no-repeat'
    }
  })))), compact && open && /*#__PURE__*/React.createElement("nav", {
    style: {
      borderTop: '1px solid var(--lcc-line-strong)',
      padding: '8px var(--gutter) 16px',
      display: 'grid'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: nav(l),
    style: {
      color: 'var(--lcc-navy)',
      textDecoration: 'none',
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      padding: '12px 0',
      borderBottom: '1px solid var(--lcc-line-soft)'
    }
  }, l.label))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/lists/InfoRow.jsx
try { (() => {
function InfoRow({
  icon,
  title,
  sub,
  href,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  const subStyle = {
    fontSize: 15,
    lineHeight: 1.5,
    color: dark ? 'var(--lcc-mist-2)' : 'var(--lcc-ink-3)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: dark ? 'var(--lcc-mist)' : 'var(--lcc-slate)',
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      lineHeight: 1.45,
      fontWeight: 600,
      color: dark ? '#FFFFFF' : 'var(--lcc-navy)'
    }
  }, title), sub && (href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      ...subStyle,
      color: dark ? 'var(--lcc-mist)' : 'var(--lcc-slate)'
    }
  }, sub) : /*#__PURE__*/React.createElement("div", {
    style: subStyle
  }, sub))));
}
Object.assign(__ds_scope, { InfoRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/InfoRow.jsx", error: String((e && e.message) || e) }); }

// components/lists/RuledList.jsx
try { (() => {
function RuledList({
  items = [],
  numbered,
  layout = 'split',
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  const rule = '1px solid ' + (dark ? 'var(--lcc-navy-line)' : 'var(--lcc-line-strong)');
  const split = layout === 'split';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      borderBottom: rule,
      ...style
    }
  }, items.map((it, i) => {
    const num = it.numeral ?? (numbered ? String(i + 1).padStart(2, '0') : null);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: rule,
        padding: '22px 0',
        display: 'grid',
        gridTemplateColumns: (num ? '40px ' : '') + (split ? 'minmax(0,1fr) minmax(0,1.6fr)' : 'minmax(0,1fr)'),
        columnGap: 24,
        rowGap: 6,
        alignItems: 'baseline'
      }
    }, num && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 15,
        color: dark ? 'var(--lcc-mist-2)' : 'var(--lcc-slate)'
      }
    }, num), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 22,
        lineHeight: 1.25,
        color: dark ? '#FFFFFF' : 'var(--lcc-navy)',
        textWrap: 'balance'
      }
    }, it.title), it.body && /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: !split && num ? '2' : undefined,
        fontSize: 16,
        lineHeight: 1.6,
        color: dark ? 'var(--lcc-mist)' : 'var(--lcc-ink-3)',
        textWrap: 'pretty'
      }
    }, it.body));
  }));
}
Object.assign(__ds_scope, { RuledList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/RuledList.jsx", error: String((e && e.message) || e) }); }

// components/media/MapBlock.jsx
try { (() => {
function MapBlock({
  address = '115 New Ballwin Road',
  city = 'Ballwin, MO 63021',
  query,
  embedSrc,
  directionsHref,
  ratio = '16 / 9',
  style
}) {
  const q = encodeURIComponent(query || address + ', ' + city);
  const src = embedSrc || 'https://maps.google.com/maps?q=' + q + '&z=15&output=embed';
  const dir = directionsHref || 'https://www.google.com/maps/dir/?api=1&destination=' + q;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.InfoRow, {
    icon: "map-pin",
    title: address,
    sub: city
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    icon: "navigation",
    href: dir
  }, "Get directions")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--lcc-line)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--lcc-sand)',
      aspectRatio: ratio
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: 'Map of ' + address,
    src: src,
    loading: "lazy",
    style: {
      border: 0,
      width: '100%',
      height: '100%',
      display: 'block'
    }
  })));
}
Object.assign(__ds_scope, { MapBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MapBlock.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoFrame.jsx
try { (() => {
const R = {
  '4:5': '4 / 5',
  '4:3': '4 / 3',
  '16:9': '16 / 9',
  '1:1': '1 / 1'
};
function PhotoFrame({
  ratio = '4:3',
  src,
  alt = '',
  label = 'Photo',
  facets = true,
  anchor = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: R[ratio] || R['4:3'],
      background: 'var(--lcc-sand)',
      borderRadius: 'var(--radius-md)',
      width: '100%',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, facets && /*#__PURE__*/React.createElement(__ds_scope.FacetMotif, {
    preset: "accent",
    anchor: anchor,
    scale: 1.4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: 16,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--lcc-sand-ink)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image",
    size: 22,
    color: "var(--lcc-sand-ink)"
  }), /*#__PURE__*/React.createElement("span", null, label))));
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/media/VideoFrame.jsx
try { (() => {
function VideoFrame({
  href = 'https://www.youtube.com/',
  label = 'Watch on YouTube',
  sub,
  thumbnail,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'block',
      overflow: 'hidden',
      aspectRatio: '16 / 9',
      background: 'var(--lcc-navy)',
      borderRadius: 'var(--radius-md)',
      color: '#FFFFFF',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, thumbnail ? /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .55
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.FacetMotif, {
    preset: "corner"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: 24,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-play",
    size: 64,
    color: h ? 'var(--lcc-amber)' : '#FFFFFF',
    style: {
      transition: 'background-color 150ms'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--lcc-mist-2)'
    }
  }, sub)));
}
Object.assign(__ds_scope, { VideoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/VideoFrame.jsx", error: String((e && e.message) || e) }); }

// components/people/LeaderProfile.jsx
try { (() => {
function LeaderProfile({
  role,
  name,
  photoSrc,
  photoLabel,
  children,
  calloutEyebrow,
  calloutTitle,
  calloutBody,
  action,
  reverse,
  style
}) {
  const photo = /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoFrame, {
    ratio: "4:5",
    src: photoSrc,
    alt: typeof name === 'string' ? name : '',
    label: photoLabel || (typeof name === 'string' ? 'Photo of ' + name : 'Photo')
  }));
  const hasCallout = calloutTitle || calloutBody || action;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'clamp(24px, 4vw, 56px)',
      alignItems: 'start',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, !reverse && photo, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, role && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, role), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(30px, 3.4vw, 40px)',
      lineHeight: 1.1,
      letterSpacing: '-0.015em',
      margin: '0 0 18px',
      color: 'var(--lcc-navy)'
    }
  }, name), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--lcc-ink-2)',
      maxWidth: '60ch',
      marginBottom: hasCallout ? 28 : 0
    }
  }, children), hasCallout && /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "warm",
    padding: 24,
    eyebrow: calloutEyebrow,
    title: calloutTitle,
    action: action
  }, calloutBody)), reverse && photo);
}
Object.assign(__ds_scope, { LeaderProfile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/people/LeaderProfile.jsx", error: String((e && e.message) || e) }); }

// components/people/PersonCard.jsx
try { (() => {
function PersonCard({
  name,
  line,
  photoSrc,
  photoLabel,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoFrame, {
    ratio: "4:3",
    src: photoSrc,
    alt: typeof name === 'string' ? name : '',
    label: photoLabel || 'Photo'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.25,
      color: 'var(--lcc-navy)',
      margin: '16px 0 4px'
    }
  }, name), line && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--lcc-ink-3)'
    }
  }, line));
}
Object.assign(__ds_scope, { PersonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/people/PersonCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Give.jsx
try { (() => {
function GiveScreen() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(SectionBand, {
    tone: "warm",
    eyebrow: "Give",
    title: "Give",
    lede: "Thank you for supporting the work and mission of Lafayette. Giving is simple and secure \u2014 and if you're just visiting, please know there's no expectation to give."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right"
  }, "Give online")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--lcc-sand-ink)',
      marginTop: 18
    }
  }, "Opens our secure giving provider. No account or app required.")), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "cream",
    title: "Other ways to give"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "In person",
    title: "During Sunday worship"
  }, "Place your gift in the collection during the 10 AM service."), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "By mail",
    title: "115 New Ballwin Road"
  }, "Mail a check to Lafayette Church of Christ, Ballwin, MO 63021."))));
}
window.GiveScreen = GiveScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Give.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Lafayette Church of Christ \xB7 Ballwin, MO",
    title: "A Jesus-community of life, light, and love.",
    lede: "Sundays at 10 AM \xB7 Bible classes for all ages at 9 AM"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('visit')
  }, "Plan your visit"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark",
    icon: "circle-play",
    onClick: () => go('watch')
  }, "Watch this Sunday"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--lcc-line)',
      padding: '28px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(InfoRow, {
    icon: "clock",
    title: "Sundays at 10 AM",
    sub: "Worship \xB7 Bible classes for all ages at 9 AM"
  }), /*#__PURE__*/React.createElement(InfoRow, {
    icon: "calendar",
    title: "Wednesdays at 7 PM",
    sub: "Bible study"
  }), /*#__PURE__*/React.createElement(InfoRow, {
    icon: "map-pin",
    title: "115 New Ballwin Road",
    sub: "Ballwin, MO 63021 \xB7 Get directions",
    href: "#"
  }))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "New here?",
    title: "We'd love to meet you.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go('visit')
    }, "Plan your visit")
  }, "Whether you're new to Ballwin, coming back to church after a while, or just curious \u2014 you're welcome exactly as you are. Here's what a first Sunday looks like."), /*#__PURE__*/React.createElement(Card, {
    variant: "deep",
    eyebrow: "Watch online",
    title: "Not ready to visit in person? Watch this Sunday.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline-on-dark",
      onClick: () => go('watch')
    }, "Watch live")
  }, "Join us live on YouTube at 10 AM, or catch up on a recent message anytime."))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "white",
    eyebrow: "Who we are",
    title: "A loving family called by God, saved by Christ and led by the Spirit.",
    lede: "We seek to honor God in all we do. Our mission is to be and make disciples of Jesus Christ in our families, community and world \u2014 and we've been doing it in Ballwin since 1962."
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "What we believe")), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "warm",
    eyebrow: "Give",
    title: "Give"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 32,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--lcc-sand-ink)',
      maxWidth: '56ch'
    }
  }, "Thank you for supporting the work and mission of Lafayette. Giving is simple and secure \u2014 and if you're just visiting, please know there's no expectation to give."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('give')
  }, "Give online")))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "cream",
    eyebrow: "Contact",
    title: "Questions? Talk to a real person.",
    lede: "Email or call the church office and we'll get back to you soon. If you'd like, tell us you're planning to visit and we'll watch for you."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "mail"
  }, "Email the office"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "phone"
  }, "Call the office"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const {
  Button,
  Card,
  Eyebrow,
  SectionBand,
  FacetMotif,
  Icon,
  InfoRow
} = window.LafayetteChurchDesignSystem_2b98d9;
function PageHero({
  eyebrow,
  title,
  lede,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--lcc-navy)',
      color: '#fff',
      padding: 'clamp(56px,8vw,112px) var(--gutter) clamp(56px,8vw,104px)'
    }
  }, /*#__PURE__*/React.createElement(FacetMotif, {
    preset: "hero",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "on-dark"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--type-display-size)',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      margin: '0 0 24px',
      maxWidth: '16ch'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--type-lede-size)',
      lineHeight: 1.35,
      color: 'var(--lcc-mist)',
      margin: '0 0 36px',
      maxWidth: '32ch'
    }
  }, lede), children));
}
Object.assign(window, {
  Button,
  Card,
  Eyebrow,
  SectionBand,
  FacetMotif,
  Icon,
  PageHero,
  InfoRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Visit.jsx
try { (() => {
function VisitScreen() {
  const [sent, setSent] = React.useState(false);
  const field = {
    width: '100%',
    minHeight: 48,
    padding: '0 14px',
    border: '1px solid var(--lcc-line-strong)',
    borderRadius: 3,
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    background: '#fff',
    color: 'var(--lcc-navy)'
  };
  const lab = {
    display: 'block',
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 6
  };
  const items = [['clock', 'How long is the service?', 'About an hour. Bible classes for all ages start at 9 AM; worship begins at 10.'], ['users', 'What should I wear?', "Come as you are — there's no dress code."], ['map-pin', 'Where do I park?', 'Park in the lot at 115 New Ballwin Road. Someone will be near the door to help you find your way.'], ['baby', 'What about my kids?', 'Bible classes run for all ages at 9 AM. Kids are always welcome in worship.']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Plan your visit",
    title: "New here? We'd love to meet you.",
    lede: "Here's what a first Sunday looks like."
  }), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "cream",
    title: "What to expect"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 20
    }
  }, items.map(([i, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    color: "var(--lcc-slate)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      lineHeight: 1.25,
      margin: '0 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--lcc-ink-3)'
    }
  }, b))))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "white",
    eyebrow: "Optional",
    title: "Let us know you're coming",
    lede: "We'll watch for you and save you a seat. No follow-up calls unless you ask."
  }, sent ? /*#__PURE__*/React.createElement(Card, {
    variant: "warm",
    title: "Thank you \u2014 we'll see you Sunday."
  }, "Someone will be near the door to help you find your way.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 20,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Your name"), /*#__PURE__*/React.createElement("input", {
    style: field,
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    style: field,
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Which Sunday?"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: field
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "How many are coming?"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    defaultValue: "1",
    style: field
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Let us know")))));
}
window.VisitScreen = VisitScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Visit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Watch.jsx
try { (() => {
function WatchScreen() {
  const [sel, setSel] = React.useState(0);
  const sermons = ['Recent message', 'Previous message', 'Earlier message'];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(SectionBand, {
    tone: "deep",
    facets: true,
    eyebrow: "Watch online",
    title: "Not ready to visit in person? Watch this Sunday.",
    lede: "Join us live on YouTube at 10 AM, or catch up on a recent message anytime."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "circle-play"
  }, "Watch live"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark"
  }, "Browse past sermons"))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "cream",
    title: "Recent messages"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/9',
      background: 'var(--lcc-cream)',
      border: '1px dashed #C9BEA8',
      borderRadius: 4,
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(FacetMotif, {
    preset: "accent",
    scale: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      color: 'var(--lcc-ink-3)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-play",
    size: 48,
    color: "var(--lcc-slate)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-mono)'
    }
  }, "YouTube embed \xB7 ", sermons[sel]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      alignContent: 'start'
    }
  }, sermons.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSel(i),
    style: {
      textAlign: 'left',
      background: i === sel ? '#fff' : 'transparent',
      border: '1px solid ' + (i === sel ? 'var(--lcc-line)' : 'transparent'),
      borderRadius: 4,
      padding: '14px 16px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      color: 'var(--lcc-navy)',
      minHeight: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 500
    }
  }, s), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--lcc-ink-3)'
    }
  }, "Sunday worship \xB7 captions available")))))));
}
window.WatchScreen = WatchScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Watch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FacetMotif = __ds_scope.FacetMotif;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Placeholder = __ds_scope.Placeholder;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.FormSuccess = __ds_scope.FormSuccess;

__ds_ns.SectionBand = __ds_scope.SectionBand;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.InfoRow = __ds_scope.InfoRow;

__ds_ns.RuledList = __ds_scope.RuledList;

__ds_ns.MapBlock = __ds_scope.MapBlock;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.VideoFrame = __ds_scope.VideoFrame;

__ds_ns.LeaderProfile = __ds_scope.LeaderProfile;

__ds_ns.PersonCard = __ds_scope.PersonCard;

})();
