
var mail = function(obj){
	var text = '<body style="margin: 0; padding: 0;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td style="padding: 10px 0 30px 0;"><table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;"><tr><td align="center" height="250" bgcolor="#70bbd9" style="background:url("http://welldoneburger.com/wp-content/uploads/2014/05/cuoco1.jpg") no-repeat center; background-size:cover;"><h1 style="font-weight: 700; font-size:36px; color:#ffffff">SRVED.</h1><h2 style="font-weight: 300; font-size:24px; color:#ffffff">Reservation confirmation.</h2></td></tr><tr><td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td style="font-size: 18px;"><b>Your reservation has been confirmed!</b></td></tr><tr><td style="padding: 20px 0 30px 0; font-size: 14px; line-height: 25px;">We"re happy to tell you that your reservation request for <b>' + obj.peopleNumber > 1 ? obj.peopleNumber + "people": "1 person" + '</b> on <b>'+ obj.customer_date + '</b> at <b>' + obj.restaurant_name + ", " + obj.restaurant_address +'</b> has been approved. Here"s your reservation summary, with all the dishes you"ve booked for your meal.<br/><br/>Your reservation helped contributing to better food management, an important player that help us all to reduce food waste and save our planet.<br/><br/>Enjoy your meal,<br/><span style="font-weight: 700; font-size: 26px; line-height: 32px;">the <span style="font-weight: 700;">SRVED.</span> team.</span></td></tr><tr><td bgcolor="#ffffff" style="border-radius:4px; border: 1px solid #dddddd;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td style="font-size: 14px; padding: 25px 15px"><b>Dishes</b></td></tr>'+ 
	obj.ordered_plates.map(function(elem){

		return '<tr><td style="font-size: 14px; padding: 0 15px 15px 15px" width="75%">' + elem.name + '</td><td align="right" style="font-size: 14px; padding: 0 15px 15px 15px; color: #888888" width="25%">' + elem.price + " x " + elem.ordered +'</td></tr>'; 

	}).join('')
	 + '<tr style="background: #fafafa;" width="100%"><td style="border-top: 1px dashed #dddddd; font-size: 18px; padding: 25px 15px;" width="75%"><b>Total:</b></td><td align="right" style="border-top: 1px dashed #dddddd; font-size: 18px; padding: 25px 15px;" width="25%"><b>' + obj.total + '€</b></td></tr></table></td></tr></table></td></tr><tr><td bgcolor="#ff1d55" style="padding: 30px 30px 30px 30px;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr> <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%"> <span style="font-weight: 700; font-size:36px; color:#ffffff">SRVED.</span> <br/> <svg width="117px" height="29px" viewBox="45 15 117 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>pp-bt-logo-white</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Desktop-HD" sketch:type="MSArtboardGroup" transform="translate(-164.000000, -32.000000)" fill="#FFFFFE"> <g id="header" sketch:type="MSLayerGroup" transform="translate(164.000000, 30.000000)"> <g id="pp-bt-logo-white" transform="translate(0.500000, 2.000000)" sketch:type="MSShapeGroup"> <path d="M75.6844468,19.2040816 L72.9596809,19.2040816 C72.7727234,19.2040816 72.6141489,19.3387755 72.585766,19.5218367 L71.484383,26.4555102 C71.4627872,26.5920408 71.5695319,26.7157143 71.7077447,26.7157143 L73.1071489,26.7157143 C73.2373404,26.7157143 73.3484043,26.6220408 73.368766,26.4940816 L73.6809787,24.5281633 C73.7105957,24.3457143 73.8691702,24.2110204 74.0548936,24.2110204 L74.9168723,24.2110204 C76.7117872,24.2110204 77.748383,23.3495918 78.0186383,21.6408163 C78.1401915,20.8932653 78.0235745,20.3055102 77.6706383,19.8953061 C77.283766,19.4434694 76.5964043,19.2040816 75.6844468,19.2040816 L75.6844468,19.2040816 Z M75.9991277,21.7369388 C75.8498085,22.7073469 75.1032128,22.7073469 74.3812979,22.7073469 L73.9697447,22.7073469 L74.2578936,20.895102 C74.2757872,20.7855102 74.3708085,20.7046939 74.4824894,20.7046939 L74.6712979,20.7046939 C75.1624468,20.7046939 75.6276809,20.7046939 75.8670851,20.9820408 C76.010234,21.1491837 76.0528085,21.3959184 75.9991277,21.7369388 Z M56.2476596,19.2040816 L53.5228936,19.2040816 C53.3365532,19.2040816 53.1779787,19.3387755 53.1489787,19.5218367 L52.0463617,26.4555102 C52.024766,26.5920408 52.1308936,26.7157143 52.2709574,26.7157143 L53.5722553,26.7157143 C53.7585957,26.7157143 53.9171702,26.5810204 53.9461702,26.3979592 L54.2435745,24.527551 C54.2731915,24.345102 54.4311489,24.2104082 54.6174894,24.2104082 L55.4794681,24.2104082 C57.274383,24.2104082 58.3103617,23.3489796 58.581234,21.6402041 C58.7034043,20.8926531 58.5861702,20.304898 58.2338511,19.8946939 C57.8463617,19.4434694 57.159617,19.2040816 56.2476596,19.2040816 Z M56.5623404,21.7369388 C56.4130213,22.7073469 55.6664255,22.7073469 54.9432766,22.7073469 L54.5323404,22.7073469 L54.8211064,20.895102 C54.838383,20.7855102 54.9340213,20.7046939 55.0450851,20.7046939 L55.2338936,20.7046939 C55.7256596,20.7046939 56.1902766,20.7046939 56.4302979,20.9820408 C56.5728298,21.1491837 56.6166383,21.3959184 56.5623404,21.7369388 Z M64.3929574,21.705102 L63.0879574,21.705102 C62.9762766,21.705102 62.8812553,21.7865306 62.8639787,21.8961224 L62.8059787,22.2585714 L62.7152766,22.1269388 C62.4326809,21.7197959 61.8027021,21.5832653 61.1739574,21.5832653 C59.7325957,21.5832653 58.5010213,22.667551 58.261,24.1883673 C58.1363617,24.9463265 58.3134468,25.6712245 58.7472128,26.1769388 C59.1458085,26.6422449 59.7134681,26.8363265 60.3903404,26.8363265 C61.5528085,26.8363265 62.1975957,26.0955102 62.1975957,26.0955102 L62.1389787,26.4555102 C62.117383,26.5920408 62.2241277,26.7157143 62.3629574,26.7157143 L63.537766,26.7157143 C63.7247234,26.7157143 63.8832979,26.5810204 63.9116809,26.3979592 L64.6175532,21.9665306 C64.6391489,21.8287755 64.5330213,21.705102 64.3929574,21.705102 Z M62.5739787,24.2257143 C62.4481064,24.9653061 61.856383,25.4618367 61.1011489,25.4618367 C60.7229149,25.4618367 60.4199574,25.3412245 60.2249787,25.1128571 C60.0318511,24.8869388 59.9590426,24.5636735 60.0207447,24.2036735 C60.1379787,23.4702041 60.7389574,22.9577551 61.4830851,22.9577551 C61.8532979,22.9577551 62.1544043,23.0795918 62.3524681,23.3104082 C62.553,23.542449 62.6319787,23.8669388 62.5739787,24.2257143 Z M83.8297447,21.705102 L82.5253617,21.705102 C82.4124468,21.705102 82.3180426,21.7865306 82.300766,21.8961224 L82.243383,22.2585714 L82.1526809,22.1269388 C81.8694681,21.7197959 81.2401064,21.5832653 80.6113617,21.5832653 C79.169383,21.5832653 77.9378085,22.667551 77.6977872,24.1883673 C77.573766,24.9463265 77.750234,25.6712245 78.183383,26.1769388 C78.5819787,26.6422449 79.1496383,26.8363265 79.8271277,26.8363265 C80.9889787,26.8363265 81.634383,26.0955102 81.634383,26.0955102 L81.575766,26.4555102 C81.5535532,26.5920408 81.6602979,26.7157143 81.7997447,26.7157143 L82.9751702,26.7157143 C83.1608936,26.7157143 83.3200851,26.5810204 83.3484681,26.3979592 L84.0543404,21.9665306 C84.0765532,21.8287755 83.9698085,21.705102 83.8297447,21.705102 Z M82.011383,24.2257143 C81.8861277,24.9653061 81.2937872,25.4618367 80.5385532,25.4618367 C80.1603191,25.4618367 79.8573617,25.3412245 79.662383,25.1128571 C79.4686383,24.8869388 79.3964468,24.5636735 79.4575319,24.2036735 C79.574766,23.4702041 80.1763617,22.9577551 80.9198723,22.9577551 C81.2913191,22.9577551 81.5911915,23.0795918 81.7898723,23.3104082 C81.9904043,23.542449 82.068766,23.8669388 82.011383,24.2257143 Z M71.3437021,21.705102 L70.0312979,21.705102 C69.9060426,21.705102 69.7888085,21.7669388 69.7178511,21.8704082 L67.9087447,24.5146939 L67.1417872,21.9738776 C67.0936596,21.8146939 66.9468085,21.7057143 66.7789787,21.7057143 L65.4894043,21.7057143 C65.3339149,21.7057143 65.2240851,21.857551 65.2740638,22.0044898 L66.7185106,26.2106122 L65.3604468,28.1116327 C65.2537021,28.2616327 65.3610638,28.4679592 65.5455532,28.4679592 L66.8561064,28.4679592 C66.9801277,28.4679592 67.0967447,28.4073469 67.1670851,28.3063265 L71.5294255,22.0595918 C71.6343191,21.9095918 71.5269574,21.705102 71.3437021,21.705102 Z M85.3679787,19.395102 L84.2499362,26.4555102 C84.2283404,26.5920408 84.3350851,26.7157143 84.4739149,26.7157143 L85.5987447,26.7157143 C85.7857021,26.7157143 85.9436596,26.5810204 85.9720426,26.3979592 L87.0746596,19.464898 C87.0968723,19.3277551 86.9895106,19.2040816 86.8506809,19.2040816 L85.5919574,19.2040816 C85.4808936,19.2040816 85.3858723,19.2855102 85.3679787,19.395102 Z M45.8304894,25.2995918 L45.0005957,26.7108163 L44.3897447,26.7108163 L47.530383,21.504898 L48.951383,26.7108163 L48.3337447,26.7108163 L47.9684681,25.2995918 L45.8304894,25.2995918 Z M47.3113404,22.7961224 L46.1359149,24.7859184 L47.8290213,24.7859184 L47.3113404,22.7961224 Z M93.9279149,22.8389796 C93.5978085,22.4330612 93.090617,22.1844898 92.5155532,22.1844898 C91.4061489,22.1844898 90.3565957,23.1408163 90.1850638,24.2281633 C90.0073617,25.3155102 90.7595106,26.2718367 91.8750851,26.2718367 C92.4365745,26.2718367 93.030766,26.0097959 93.4855106,25.6173469 L93.38,26.2981633 C92.8987234,26.6055102 92.3434043,26.782449 91.8158511,26.782449 C90.4096596,26.782449 89.3989787,25.6491837 89.6235745,24.2471429 C89.8475532,22.8322449 91.2012979,21.6726531 92.626617,21.6726531 C93.1819362,21.6726531 93.6508723,21.8306122 94.0402128,22.157551 L93.9279149,22.8389796 Z M93.9544468,25.1636735 C94.0988298,24.2593878 94.9385957,23.5332653 95.8487021,23.5332653 C96.7600426,23.5332653 97.3604043,24.26 97.2154043,25.1636735 C97.0710213,26.0685714 96.2318723,26.7818367 95.3273191,26.7818367 C94.422766,26.7818367 93.8088298,26.0685714 93.9544468,25.1636735 Z M94.482617,25.157551 C94.3838936,25.7863265 94.7534894,26.297551 95.4069149,26.297551 C96.0603404,26.297551 96.5891277,25.7863265 96.6878511,25.157551 C96.7865745,24.534898 96.423766,24.0187755 95.7703404,24.0187755 C95.1169149,24.0187755 94.5813404,24.534898 94.482617,25.157551 Z M98.3988511,23.9520408 L98.4111915,23.9520408 C98.6228298,23.6967347 98.9134468,23.5332653 99.2299787,23.5332653 C99.5940213,23.5332653 99.8901915,23.7230612 100.003106,24.0444898 C100.24066,23.7028571 100.642957,23.5332653 101.018723,23.5332653 C101.811596,23.5332653 101.904149,24.174898 101.798021,24.8226531 L101.501851,26.6967347 L100.973681,26.6967347 L101.257511,24.9083673 C101.322915,24.5091837 101.375979,24.0181633 100.834851,24.0181633 C100.228319,24.0181633 100.068511,24.6004082 99.9895319,25.0657143 L99.7328511,26.6967347 L99.2040638,26.6967347 L99.4823404,24.9487755 C99.5415745,24.5685714 99.587234,24.0181633 99.0800426,24.0181633 C98.4587021,24.0181633 98.2939574,24.6402041 98.2149787,25.104898 L97.9638511,26.6967347 L97.4362979,26.6967347 L97.9249787,23.6177551 L98.4519149,23.6177551 L98.3988511,23.9520408 Z M103.032681,24.0567347 L103.045638,24.0567347 C103.355383,23.7163265 103.771872,23.5338776 104.201319,23.5338776 C105.112043,23.5338776 105.560617,24.3126531 105.422404,25.1642857 C105.282957,26.0428571 104.603617,26.782449 103.672532,26.782449 C103.250489,26.782449 102.887064,26.5993878 102.688383,26.2657143 L102.675426,26.2657143 L102.331745,28.4269388 L101.804191,28.4269388 L102.569915,23.6183673 L103.097468,23.6183673 L103.032681,24.0567347 Z M102.835234,25.1257143 C102.736511,25.727551 103.006766,26.297551 103.666362,26.297551 C104.346936,26.297551 104.788723,25.7538776 104.888064,25.1318367 C104.986787,24.5159184 104.677043,24.0187755 104.023,24.0187755 C103.409681,24.0181633 102.92717,24.5483673 102.835234,25.1257143 Z M108.619191,26.6967347 L108.090404,26.6967347 L108.156426,26.2712245 L108.143468,26.2712245 C107.819532,26.6122449 107.429574,26.7818367 106.994574,26.7818367 C106.083234,26.7818367 105.627255,26.0165306 105.766085,25.1636735 C105.905532,24.2857143 106.59166,23.5332653 107.522745,23.5332653 C107.945404,23.5332653 108.295255,23.7297959 108.499489,24.0561224 L108.513064,24.0561224 L108.577851,23.6171429 L109.107255,23.6171429 L108.619191,26.6967347 Z M106.315234,25.1257143 C106.215894,25.727551 106.486149,26.297551 107.146979,26.297551 C107.826936,26.297551 108.268723,25.7538776 108.368681,25.1318367 C108.466787,24.5159184 108.156426,24.0187755 107.503,24.0187755 C106.889064,24.0181633 106.40717,24.5483673 106.315234,25.1257143 Z M110.130894,23.9912245 L110.143851,23.9912245 C110.414106,23.6967347 110.724468,23.5332653 111.107638,23.5332653 C111.966532,23.5332653 112.065255,24.1491837 111.945553,24.8697959 L111.654936,26.6967347 L111.127383,26.6967347 L111.403809,24.9610204 C111.483404,24.4632653 111.516723,24.0181633 110.90217,24.0181633 C110.176553,24.0181633 110.024766,24.6855102 109.93283,25.2353061 L109.701447,26.6967347 L109.173894,26.6967347 L109.661957,23.6177551 L110.189511,23.6177551 L110.130894,23.9912245 Z M112.369447,23.6177551 L112.982766,23.6177551 L113.729362,25.824898 L115.081872,23.6177551 L115.683468,23.6177551 L112.627362,28.4263265 L112.025766,28.4263265 L113.352362,26.4083673 L112.369447,23.6177551 Z" id="Shape"></path> </g> </g> </g> </g> </svg> </td> <td align="right" width="25%"> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </body>'

	return text;

}


module.exports= mail;