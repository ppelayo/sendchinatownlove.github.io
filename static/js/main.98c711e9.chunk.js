(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[0],{13:function(e,t,a){e.exports={container:"styles_container__3x5BM",logo:"styles_logo__GbMRD",links:"styles_links__14pHF",link:"styles_link__38mAn",colorWhite:"styles_colorWhite__2rMCv",bgColorDark:"styles_bgColorDark__1n4IJ",icon:"styles_icon__8XdB0"}},16:function(e,t,a){e.exports={container:"styles_container__3NFhU",contentContainer:"styles_contentContainer__1jVyv",introContainer:"styles_introContainer__2kp9d",headerText:"styles_headerText__2lVbU",introText:"styles_introText__3No1g",ctaButton:"styles_ctaButton__39FHM"}},17:function(e,t,a){e.exports={nationality:"styles_nationality__1LqAr",address:"styles_address__TJ44x",storeDetails:"styles_storeDetails__frA5Y"}},18:function(e,t,a){e.exports={container:"styles_container__3UBUi",introContainer:"styles_introContainer__2gT7i",headerText:"styles_headerText__2L2xH",introTextSection:"styles_introTextSection__1s7Gx",introText:"styles_introText__3taS9",ctaButton:"styles_ctaButton__1KUC6"}},2:function(e,t,a){e.exports={billFormContainer:"styles_billFormContainer__3S6Xl",billingsContainer:"styles_billingsContainer__3DluJ",addSpacing:"styles_addSpacing__3vUb2",label:"styles_label__1zfOS",email:"styles_email__23z1f",address:"styles_address__3OJzv",row:"styles_row__1ur9t",column:"styles_column__1lDH9",city:"styles_city__3Y9Rt",state:"styles_state__1AZcX",zipcode:"styles_zipcode__swdkI",btnRow:"styles_btnRow__1jGYu"}},21:function(e,t,a){"use strict";var n=a(42);a.o(n,"getSeller")&&a.d(t,"getSeller",(function(){return n.getSeller})),a.o(n,"getSellers")&&a.d(t,"getSellers",(function(){return n.getSellers})),a.o(n,"makePayment")&&a.d(t,"makePayment",(function(){return n.makePayment}));var o=a(51);a.d(t,"getSeller",(function(){return o.a})),a.d(t,"getSellers",(function(){return o.b})),a.d(t,"makePayment",(function(){return o.c}))},25:function(e,t,a){e.exports={donationsContainer:"styles_donationsContainer__2I-52",amountContainer:"styles_amountContainer__25lIo",selectAmtContainer:"styles_selectAmtContainer__GP83r",customAmt:"styles_customAmt__3IQuP",nextBtn:"styles_nextBtn__1QIOk"}},26:function(e,t,a){e.exports={container:"styles_container__1GePj",paymentContainer:"styles_paymentContainer__3PfAD",row:"styles_row__3dGjH",cardLabel:"styles_cardLabel__1m9JD",checkbox:"styles_checkbox__38N48",btnRow:"styles_btnRow__m72Gz",label:"styles_label__3Gsvi"}},29:function(e,t,a){e.exports={container:"styles_container__1LEAb",contentContainer:"styles_contentContainer__egDiR",ownerPanel:"styles_ownerPanel__2bqU0",storeInfo:"styles_storeInfo__3ZKQS"}},31:function(e,t,a){e.exports={container:"styles_container__3EZ7J",image:"styles_image__3EPQJ",header:"styles_header__1kjrZ"}},32:function(e,t,a){e.exports={navLinkContainer:"styles_navLinkContainer__2K1Dj",navLink:"styles_navLink__248sq","navLink--active":"styles_navLink--active__1j7FX"}},34:function(e,t,a){e.exports={container:"styles_container__2viEp",finishBtn:"styles_finishBtn__2yINT"}},40:function(e,t,a){e.exports=a.p+"static/media/logo.909f1479.svg"},42:function(e,t){},51:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return u}));var n=a(7),o=a.n(n),s=a(15),r=a(33),l=a.n(r),i=a(10),c=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=void 0,e.next=3,l.a.get("https://api.sendchinatownlove.com/sellers").then((function(e){t=e})).catch((function(e){console.log({err:e})}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=void 0,e.next=3,l.a.get("https://api.sendchinatownlove.com/sellers/test_kitchen").then((function(e){t=e})).catch((function(e){console.log({err:e})}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(o.a.mark((function e(t,a,n,r){var c,m,u,d,h,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.address,m=r.city,u=r.email,d=r.name,h=r.stateForm,p=r.zipCode,e.next=3,l.a.post("https://api.sendchinatownlove.com/charges",{line_items:[n],email:u},{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(){var e=Object(s.a)(o.a.mark((function e(n){var s,r,l,A;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&a){e.next=4;break}return e.abrupt("return");case 4:return s=a.getElement(i.CardElement),e.next=7,t.confirmCardPayment("".concat(n.data.client_secret),{payment_method:{card:s,billing_details:{name:d,email:u,address:{city:m,state:h,country:"US",postal_code:p,line1:c}}}});case 7:(r=e.sent).error?console.log(r.error.message):"succeeded"===(null===(l=r.paymentIntent)||void 0===l?void 0:l.status)&&console.log(null===(A=r.paymentIntent)||void 0===A?void 0:A.status,"The payment has been processed!");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,o){return e.apply(this,arguments)}}()},56:function(e,t){e.exports="data:image/png;base64,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"},57:function(e,t,a){e.exports=a.p+"static/media/female.46412c79.svg"},58:function(e,t,a){e.exports={container:"styles_container__VZ3u7"}},62:function(e,t,a){e.exports=a.p+"static/media/chinatown-logo.349de0ef.png"},66:function(e,t,a){e.exports=a(95)},71:function(e,t,a){},8:function(e,t,a){e.exports={container:"styles_container__3Rmvf",ownerName:"styles_ownerName__3FfLm",ownerContainer:"styles_ownerContainer__2jGJO",progressContainer:"styles_progressContainer__2AZI-",progressBar:"styles_progressBar__2FFXq",myBar:"styles_myBar__2sJgn",buttonContainer:"styles_buttonContainer__2bchx",button:"styles_button__1x3xR",summaryContainer:"styles_summaryContainer__2Z2qX",storeSummaryLabel:"styles_storeSummaryLabel__3wuYH",fa:"styles_fa__33jUi"}},95:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(52),r=a.n(s),l=(a(71),a(19)),i=a(20),c=a(22),m=a(23),u=a(16),d=a.n(u),h=a(13),p=a.n(h);function A(e,t){return"dark"===t?[e,p.a.colorWhite].join(" "):e}var y=function(e){var t=e.theme,n=void 0===t?"none":t,s=A("fa fa-envelope",n),r=A("fa fa-instagram",n),l=A("fa fa-facebook",n),i=A(p.a.icon,n),c=A(p.a.link,n),m=function(e,t){return"dark"===t?[e,p.a.bgColorDark].join(" "):e}(p.a.container,n);return o.a.createElement("footer",null,o.a.createElement("div",{className:m},o.a.createElement("img",{className:p.a.logo,src:a(40),alt:"send chinatown love"}),o.a.createElement("ul",{className:p.a.links},o.a.createElement("li",null,o.a.createElement("a",{className:i,href:"mailto:sendchinatownlove@gmail.com"},o.a.createElement("span",{className:s})),o.a.createElement("a",{className:c,href:"mailto:sendchinatownlove@gmail.com"},"Email")),o.a.createElement("li",null,o.a.createElement("a",{className:i,href:"https://instagram.com/sendchinatownlove"},o.a.createElement("span",{className:r})),o.a.createElement("a",{className:c,href:"https://instagram.com/sendchinatownlove"},"Instagram")),o.a.createElement("li",null,o.a.createElement("a",{className:i,href:"https://www.facebook.com/Send-Chinatown-Love-100872288240891/"},o.a.createElement("span",{className:l})),o.a.createElement("a",{className:c,href:"https://www.facebook.com/Send-Chinatown-Love-100872288240891/"},"Facebook")))))},b=a(27),f=function(){return n.createElement("div",{className:d.a.container},n.createElement("main",{className:d.a.contentContainer},n.createElement("div",{className:d.a.introContainer},n.createElement("h1",{className:d.a.headerText},"Chinatown needs your help"),n.createElement("p",{className:d.a.introText},"Support local Chinatown businesses during the COVID-19 pandemic and help us bring their stores online"),n.createElement(b.a,{to:"/about"},n.createElement("button",{className:d.a.ctaButton},"Learn More")))),n.createElement(y,{theme:"dark"}))},E=a(55),g=a(31),C=a.n(g),v=a(56),w=a.n(v),k=function(){return n.createElement("div",{className:C.a.container},n.createElement("img",{className:C.a.image,src:w.a,alt:"Logo"}),n.createElement("div",{className:C.a.header},"Shunfa Bakery"))},N=a(57),B={storeInfo:{nationality:"Chinese",name:"Shunfa Bakery",address:{line1:"6221 Fort Hamilton Pkwy",line2:"Brooklyn, NY 11219"},phoneNumber:"(718) 833-8884",introduction:"Shunfa Bakery is a Chinese bakery right by Brooklyn\u2019s Chinatown. The family-owned business started in 2015 and has become the neighborhood\u2019s go-to eatery for Chinese pastries and dishes. It is best known for its steamed rice-rolls that start as low as $1.50. All food is made from scratch and all dishes are made to order. The bakery also offers a variety of drinks from the usual milk tea offered at many Chinese eateries to smoothies and bubble tea. It\u2019s a great stop to grab a quick bite to eat or a whole meal!"},ownerInfo:{ownerName:"Owner Name",imageSrc:a.n(N).a},storeStory:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n\nSection 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',menuItems:[{name:"Item Name",description:"Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Item Name",description:"Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}]},I=a(64),O=a(17),x=a.n(O),S=a(32),_=a.n(S),j=a(12),M=a(58),P=a.n(M),W=function(e){var t=e.story;return n.createElement("section",{className:P.a.container},t)},T=function(e){var t=e.storeStoryProps,a=(e.storeMenuProps,e.className);return n.createElement("section",{className:a},n.createElement("nav",{className:_.a.navLinkContainer},n.createElement(b.b,{className:_.a.navLink,activeClassName:_.a["navLink--active"],to:"/story"},"Story")),n.createElement(j.c,null,n.createElement(j.a,{path:"/story"},n.createElement(W,t))))},J=a(1),q=a.n(J),D=function(e){var t=e.nationality,a=(e.name,e.address),o=e.phoneNumber,s=e.introduction,r=e.className,l=e.storeDetailsProps,i=Object(I.a)({},l,{className:x.a.storeDetails});return n.createElement("section",{className:q()(x.a.container,r)},n.createElement("div",{className:x.a.nationality},t),n.createElement("p",null,n.createElement("div",{className:x.a.address},a.line1),n.createElement("div",{className:x.a.address},a.line2),n.createElement("div",{className:x.a.address},o)),n.createElement("p",null,s),n.createElement(T,i))},L=a(11),R=a(8),z=a.n(R),F=a(59),Q=a(60),V=a(24),Y=a(63),K=a(65),Z=a(25),U=a.n(Z),X=a(30),H=a(10),G=a(61),$=a(2),ee=a.n($),te=a(7),ae=a.n(te),ne=a(15),oe=a(38),se=a(26),re=a.n(se),le=a(21),ie=a(34),ce=a.n(ie),me=a(62),ue=a.n(me),de={style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}};var he=function(){return o.a.createElement("label",null,o.a.createElement(H.CardElement,{options:de}))},pe=function(e){var t=e.handleClose,a=e.showConfirmModal;return n.createElement("form",{id:"payment-form",className:q()(ce.a.container,"modalForm--form"),style:{display:a?"block":"none"}},n.createElement("button",{className:"closeButton--close",onClick:t}," ","\xd7"),n.createElement("h2",null,"Thank you for your donation!"),n.createElement("p",null,"We appreciate your support for small businesses"),n.createElement("img",{className:ce.a.image,src:ue.a,alt:"Logo"}),n.createElement("button",{className:q()(ce.a.finishBtn,"modalButton--filled"),onClick:t}," ","Finish"))},Ae=function(e){var t=e.purchaseType,a=e.handleClose,s=e.hidePaymentModal,r=e.showPayModal,l=e.donatedAmt,i=e.merchant,c={amount:100*Number(l),currency:"usd",item_type:"donation"===t?"donation":"gift_card",quantity:1,seller_id:"shunfa-bakery"},m=Object(n.useState)(!1),u=Object(oe.a)(m,2),d=u[0],h=u[1],p=Object(n.useState)(!1),A=Object(oe.a)(p,2),y=A[0],b=A[1],f=Object(H.useStripe)(),E=Object(H.useElements)(),g=function(){var e=Object(ne.a)(ae.a.mark((function e(t){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(le.makePayment)(f,E,c,i);case 3:h(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{id:"payment-form",className:q()(re.a.container,"modalForm--form"),style:{display:r?"block":"none"}},o.a.createElement("button",{className:"closeButton--close",onClick:a}," ","\xd7"," "),o.a.createElement("h2",null,"Complete your"," ","donation"===t?"donation":"gift card purchase"),o.a.createElement("p",null,"Please add your payment information below"),o.a.createElement("div",{className:re.a.paymentContainer},o.a.createElement("h3",null,"Payment Information"),o.a.createElement(he,null)," ",o.a.createElement("br",null),o.a.createElement("h3",null,"donation"===t?"Donation":"Gift card"," details"),o.a.createElement("span",null,"Donate ",o.a.createElement("b",null,"$",l)," to Shunfa Bakery")," ",o.a.createElement("p",null),o.a.createElement("div",{className:re.a.row},o.a.createElement("input",{type:"checkbox",name:"checkbox",className:re.a.checkbox,value:"Agree",onClick:function(){return b(!y)}}),o.a.createElement("label",{htmlFor:"checkbox"},"I agree with the ",o.a.createElement("b",null,"Terms & Conditions"))),o.a.createElement("p",null,"By proceeding with your purchase, you understand that the gift card is not redeemable for cash and can only be used at the merchant\u2019s restaurant. All purchases are final. In the event that the merchant is no longer open at the time of redemption, Send Chinatown Love Inc. will not be able to refund your purchase."),o.a.createElement("div",{className:re.a.btnRow},o.a.createElement("button",{type:"button",className:"modalButton--back",onClick:s}," ","\u1438 Back"," "),o.a.createElement("button",{type:"button",className:"modalButton--filled",onClick:g,disabled:!1===y}," ","Confirm"," ")))),o.a.createElement(pe,{showConfirmModal:d,handleClose:a}))},ye=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_ENDPOINT:"https://api.sendchinatownlove.com/"}).STRIPE_PUBLISHABLE_KEY,be=Object(G.a)(ye),fe=Ae,Ee=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",address:"",city:"",stateForm:"",zipCode:"",showPayModal:!1},n.handleChange=n.handleChange.bind(Object(L.a)(n)),n.showPaymentModal=n.showPaymentModal.bind(Object(L.a)(n)),n.hidePaymentModal=n.hidePaymentModal.bind(Object(L.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(X.a)({},t,a))}},{key:"showPaymentModal",value:function(){this.setState({showPayModal:!0})}},{key:"hidePaymentModal",value:function(){this.setState({showPayModal:!1})}},{key:"render",value:function(){var e=this;return n.createElement(n.Fragment,null,n.createElement("form",{id:"billing-form",className:q()(ee.a.billFormContainer,"modalForm--form"),style:{display:this.props.showBillModal?"block":"none"}},n.createElement("button",{className:"closeButton--close",onClick:this.props.handleClose}," ","\xd7"," "),n.createElement("h2",null,"Complete your"," ","donation"===this.props.purchaseType?"donation":"gift card purchase"),n.createElement("div",{className:ee.a.addSpacing},"Please add your payment information below"),n.createElement("div",{className:ee.a.billingsContainer},n.createElement("h3",null,"Billing Information"),n.createElement("label",{htmlFor:"billing-info"},"Full name"),n.createElement("input",{name:"name",type:"text",className:q()(ee.a.label,"modalInput--input"),onChange:function(t){return e.handleChange(t)},value:this.state.name}),n.createElement("label",{htmlFor:"email"},"Email"),n.createElement("input",{name:"email",type:"email",className:q()(ee.a.label,ee.a.email,"modalInput--input"),onChange:function(t){return e.handleChange(t)},value:this.state.email}),n.createElement("label",{htmlFor:"address"},"Address"),n.createElement("input",{name:"address",type:"text",className:q()(ee.a.label,ee.a.address,"modalInput--input"),onChange:function(t){return e.handleChange(t)},value:this.state.address}),n.createElement("div",{className:ee.a.row},n.createElement("div",{className:ee.a.column},n.createElement("label",{htmlFor:"City"},"City"),n.createElement("input",{name:"city",type:"text",className:q()("modalInput--input",ee.a.label,ee.a.city),onChange:function(t){return e.handleChange(t)},value:this.state.city})),n.createElement("div",{className:ee.a.column},n.createElement("label",{htmlFor:"State"},"State"),n.createElement("input",{name:"stateForm",type:"text",className:q()("modalInput--input",ee.a.label,ee.a.state),onChange:function(t){return e.handleChange(t)},value:this.state.stateForm})),n.createElement("div",{className:ee.a.column},n.createElement("label",{htmlFor:"zipcode"},"Zipcode"),n.createElement("input",{name:"zipcode",type:"text",className:q()("modalInput--input",ee.a.label,ee.a.zipcode),onChange:function(t){return e.handleChange(t)},value:this.state.zipCode}))),n.createElement("div",{className:ee.a.btnRow},n.createElement("button",{type:"button",className:q()(ee.a.nextBtn,"modalButton--back"),onClick:this.props.hideBillModal}," ","\u1438 Back"),n.createElement("button",{type:"button",className:"modalButton--filled",onClick:this.showPaymentModal}," ","Next")))),n.createElement(H.Elements,{stripe:be},n.createElement(fe,{showPayModal:this.state.showPayModal,handleClose:this.props.handleClose,hidePaymentModal:this.hidePaymentModal,donatedAmt:this.props.donatedAmt,merchant:this.state,purchaseType:this.props.purchaseType})))}}]),a}(n.Component),ge=function(e){Object(K.a)(a,e);var t=Object(Y.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).state={amount:0,customInput:!1,close:!1,next:!1,showBillModal:!1},n.handleChange=n.handleChange.bind(Object(V.a)(n)),n.showBillingsModal=n.showBillingsModal.bind(Object(V.a)(n)),n.hideBillingsModal=n.hideBillingsModal.bind(Object(V.a)(n)),n}return Object(Q.a)(a,[{key:"handleChange",value:function(e,t){var a=e.target.value;t&&Number(a)?this.setState({amount:a,customInput:t}):this.setState({amount:a})}},{key:"showBillingsModal",value:function(){this.setState({showBillModal:!0})}},{key:"hideBillingsModal",value:function(){this.setState({showBillModal:!1})}},{key:"render",value:function(){var e=this;return n.createElement("form",{id:"donation-form",className:q()(U.a.donationsContainer,"modalForm--form"),style:{display:this.props.show?"block":"none"}},n.createElement("button",{className:"closeButton--close",onClick:this.props.handleClose}," ","\xd7"," "),n.createElement("h2",null,"Shunfa Bakery"),n.createElement("p",null,"Please select an amount and leave a message"),n.createElement("div",{className:U.a.amountContainer},n.createElement("label",{htmlFor:"select-amount"},"Select an amount ")," ",n.createElement("br",null),n.createElement("div",{className:U.a.selectAmtContainer},n.createElement("button",{type:"button",className:"modalButton--outlined",value:"10",onClick:function(t){return e.handleChange(t,!1)}}," ","$10"),n.createElement("button",{type:"button",className:"modalButton--outlined",value:"25",onClick:function(t){return e.handleChange(t,!1)}}," ","$25"),n.createElement("button",{type:"button",className:"modalButton--outlined",value:"50",onClick:function(t){return e.handleChange(t,!1)}}," ","$50"),n.createElement("button",{type:"button",className:"modalButton--outlined",value:"100",onClick:function(t){return e.handleChange(t,!1)}}," ","$100")),n.createElement("label",{htmlFor:"custom-amount"},"Or enter any amount ")," ",n.createElement("br",null),n.createElement("input",{name:"custom-amount",type:"number",className:q()(U.a.customAmt,"modalInput--input"),onChange:function(t){return e.handleChange(t,!0)},value:this.state.customInput?this.state.amount:"",placeholder:"$"})),n.createElement("button",{type:"button",className:q()(U.a.nextBtn,"modalButton--filled"),onClick:this.showBillingsModal,disabled:0===this.state.amount}," ","Next"),n.createElement(Ee,{showBillModal:this.state.showBillModal,hideBillModal:this.hideBillingsModal,donatedAmt:this.state.amount,purchaseType:this.props.purchaseType}))}}]),a}(n.Component),Ce=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={current:4e3,need:5e3,show:!1,purchaseType:""},n.showModal=n.showModal.bind(Object(L.a)(n)),n.hideModal=n.hideModal.bind(Object(L.a)(n)),n}return Object(i.a)(a,[{key:"showModal",value:function(e){var t=e.target.value;this.setState({show:!0,purchaseType:t})}},{key:"hideModal",value:function(){this.setState({show:!1})}},{key:"render",value:function(){return n.createElement("section",{className:q()(z.a.container,this.props.className)},n.createElement("figure",{className:z.a.ownerContainer},n.createElement("img",{className:z.a.ownerImage,src:this.props.imageSrc,alt:this.props.ownerName})),n.createElement("h2",{className:z.a.ownerName},this.props.ownerName),n.createElement("div",{className:z.a.progressContainer},n.createElement("div",{className:q()(z.a.progressBar,"progress-bar")},n.createElement("div",{className:z.a.myBar,style:{width:"".concat(this.state.current/this.state.need*100,"%")}}," ")),n.createElement("div",null,"$",this.state.current," of $",this.state.need)),n.createElement("div",{className:z.a.buttonContainer},n.createElement("button",{value:"donation",className:q()(z.a.button,"button--filled"),onClick:this.showModal},"Donate"),n.createElement("button",{value:"gift-card",className:q()(z.a.button,"button--outlined"),onClick:this.showModal},"Gift Card")),n.createElement(ge,{show:this.state.show,handleClose:this.hideModal,purchaseType:this.state.purchaseType}),n.createElement("div",{className:z.a.mapsContainer}))}}]),a}(n.Component),ve=a(29),we=a.n(ve),ke=function(){Object(n.useEffect)((function(){Object(le.getSeller)()}),[]);var e=Object(E.a)({},B.storeInfo,{storeDetailsProps:{storeStoryProps:{story:B.storeStory},storeMenuProps:{menuItems:B.menuItems}},className:we.a.storeInfo});return n.createElement("div",{className:we.a.container},n.createElement("main",null,n.createElement(k,null),n.createElement("div",{className:we.a.contentContainer},n.createElement(D,e),n.createElement(Ce,Object.assign({className:we.a.ownerPanel},B.ownerInfo)))),n.createElement(y,null))},Ne=a(18),Be=a.n(Ne),Ie=function(){return n.createElement("div",{className:Be.a.container},n.createElement("main",null,n.createElement("div",{className:Be.a.introContainer},n.createElement("h1",{className:Be.a.headerText},"Send Chinatown Love"),n.createElement("div",{className:Be.a.introTextSection},n.createElement("p",{className:Be.a.introText},"Once a bustling location known for its delicious food, fresh produce, and affordable prices \u2013 NYC\u2019s Chinatown has now become completely barren. Although many businesses have been affected by the recent COVID-19 outbreak, Chinatown has had it the worst. Chinatown businesses have been facing declines in business due to discrimination and racism weeks before other restuarants felt similar effects of COVID-19 on sales. Immigrant owners who typically don\u2019t speak English and their dependence on a cash-only system have put them at an even greater disadvantage of surviving through this pandemic. ",n.createElement("br",null)," ",n.createElement("br",null),"They were there for you on those late 4am nights you barely remember, or the next morning when you were desperately seeking a fresh bowl of noodle soup and cold tea. To all the tourists and locals alike who have visited NYC\u2019s Chinatown and were mesmerized by the ambience and enjoyed it\u2019s services. Be there for your Chinatown. The time to help is now.")),n.createElement("a",{href:"mailto:sendchinatownlove@gmail.com"},n.createElement("button",{className:Be.a.ctaButton},"Work with us")))),n.createElement(y,null))},Oe=a(4),xe=Object(Oe.a)(),Se=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={sellers:[],sellersLoading:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(le.getSellers)();console.log("App.tsx, componentWillMount: ",{sellers:e})}},{key:"render",value:function(){return o.a.createElement(j.b,{history:xe},o.a.createElement(j.c,null,o.a.createElement(j.a,{exact:!0,path:"/",component:f}),o.a.createElement(j.a,{path:"/story/:id",component:ke}),o.a.createElement(j.a,{path:"/about",component:Ie})))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.98c711e9.chunk.js.map
