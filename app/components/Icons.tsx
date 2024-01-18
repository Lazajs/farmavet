'use client'

type T = React.SVGProps<SVGSVGElement>

export const Icons = {
  Cart: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="25" height="22" fill="none"><g clipPath="url(#a)"><path fill="#fff" d="M9.6154 19.846c0 .5208-.1903.9715-.571 1.3521-.3805.3807-.8313.571-1.352.571-.521 0-.9717-.1903-1.3523-.571-.3806-.3806-.5709-.8313-.5709-1.3521s.1903-.9716.571-1.3522c.3805-.3806.8313-.5709 1.3521-.5709s.9716.1903 1.3522.5709c.3806.3806.5709.8314.5709 1.3522Zm13.4615 0c0 .5208-.1903.9715-.5709 1.3521-.3806.3807-.8313.571-1.3522.571-.5208 0-.9715-.1903-1.3521-.571-.3806-.3806-.5709-.8313-.5709-1.3521s.1903-.9716.5709-1.3522c.3806-.3806.8313-.5709 1.3521-.5709.5209 0 .9716.1903 1.3522.5709.3806.3806.5709.8314.5709 1.3522ZM25 3.4998v7.6923c0 .2404-.0826.4533-.2479.6386-.1653.1853-.3681.2929-.6085.323l-15.685 1.8329c.1301.601.1952.9515.1952 1.0517 0 .1603-.1202.4808-.3605.9615h13.8221c.2604 0 .4858.0952.6761.2855.1903.1903.2854.4157.2854.6761s-.0951.4858-.2854.6761c-.1903.1903-.4157.2854-.6761.2854H6.7308c-.2605 0-.4858-.0951-.6761-.2854-.1903-.1903-.2855-.4157-.2855-.6761 0-.1102.04-.268.1202-.4733.0801-.2053.1603-.3856.2404-.5408a26.116 26.116 0 0 1 .323-.601c.1352-.2454.2129-.3931.2329-.4432L4.0264 2.5383H.9615c-.2604 0-.4857-.0951-.676-.2854C.0952 2.0625 0 1.8372 0 1.5768S.0952 1.091.2855.9007C.4758.7104.701.6152.9615.6152h3.8462c.1603 0 .303.0326.4282.0977.1252.0651.2228.1427.293.2329.07.0901.1352.2128.1953.368.06.1553.1001.2855.1202.3907.02.1051.0475.2529.0826.4432.035.1903.0576.3205.0676.3906h18.0439c.2604 0 .4857.0952.676.2855.1903.1903.2855.4156.2855.676Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .6152h25V21.769H0z"/></clipPath></defs></svg>),
  Letter: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#627941" fillRule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172ZM18.576 7.52a.7502.7502 0 0 1-.096 1.056l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746-.66.425-1.303.693-2.044.693-.741 0-1.384-.269-2.045-.693-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.7502.7502 0 1 1 .96-1.153l2.16 1.799c.933.777 1.58 1.315 2.128 1.667.529.34.888.455 1.233.455.345 0 .704-.114 1.233-.455.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 0 1 .5481-.1701.7478.7478 0 0 1 .5069.2671Z" clipRule="evenodd"/></svg>),
  Pencil: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g clipPath="url(#a)"><path fill="#627941" d="m19.4493 5.5508-1.8008 1.8008a.4692.4692 0 0 1-.6641 0l-4.3359-4.336a.4692.4692 0 0 1 0-.664L14.4493.5508c.7304-.7305 1.9179-.7305 2.6523 0l2.3477 2.3476c.7343.7305.7343 1.918 0 2.6524Zm-8.3477-1.6524L.8438 14.1562l-.8281 4.7461c-.1133.6407.4453 1.1954 1.086 1.086l4.746-.8321L16.1055 8.8984a.4692.4692 0 0 0 0-.664l-4.3359-4.336c-.1875-.1836-.4844-.1836-.668 0Zm-5.789 7.7032c-.2149-.2149-.6797 1.1172-.4649.9023l6.0156-6.0156c.2149-.2149-.5507-.8438-.3359-.629.2148.215-.1172.7032-.332.918l-5.6055 5.0782c-.2148.2148.9375-.0391.7226-.2539Zm-1.875 4.9609h1.875v1.418l-2.5196.4414-1.2148-1.2149.4414-2.5195h1.418v1.875Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>),
  User: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><path fill="#627941" d="M5.8342 6.5408a5.166 5.166 0 1 1 8.0451 4.2887 8.2579 8.2579 0 0 1 5.3625 7.3411 1.031 1.031 0 0 1-.5923.9815 1.0324 1.0324 0 0 1-.3908.0965H3.7414a1.031 1.031 0 0 1-.9817-1.078 8.2582 8.2582 0 0 1 5.3625-7.3425 5.1607 5.1607 0 0 1-2.288-4.2873Z"/></svg>),
  Logo: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="336" height="97" fill="none"><path fill="#627941" d="M0 27.1018c0-8.5044 6.8942-15.3987 15.3987-15.3987H336v68.9863c0 8.5045-6.894 15.3987-15.399 15.3987H0V27.1018Z"/><path fill="#fff" d="M22.1711 22.2644h27.0074l-1.0264 4.8755H35.0012l-2.5018 11.7395h10.9697l-1.0264 4.9396H31.473L27.3673 63H13.5108l8.6603-40.7356ZM78.2437 63H63.2325l-.8982-10.1999H50.4665L45.9118 63h-6.2226l18.9244-40.7356h15.2037L78.2437 63ZM52.5835 48.1171h9.3018l-1.4755-17.4489-7.8263 17.4489Zm68.6775-16.1659c0 2.5232-.706 4.854-2.117 6.9924-1.412 2.1383-3.743 3.7635-6.993 4.8754L119.593 63h-14.306l-5.6451-17.7697h-.7057L95.1513 63H81.2948l8.6603-40.7356h16.8719c1.967 0 3.827.1283 5.581.3849 1.753.2139 3.271.6843 4.554 1.4114 1.326.6842 2.374 1.6679 3.144 2.9509.77 1.2402 1.155 2.8868 1.155 4.9396Zm-18.476 9.1735c1.112 0 2.053-.3635 2.823-1.0906.812-.7698 1.454-1.6893 1.924-2.7584.514-1.0692.877-2.2025 1.091-3.4.214-1.2403.321-2.3094.321-3.2075 0-1.112-.193-2.0529-.578-2.8227-.385-.8125-1.219-1.2188-2.502-1.2188h-2.886l-3.2078 14.498h3.0148ZM168.977 63h-14.242l5.902-27.713L145.433 63h-8.724l-2.887-28.6753L127.664 63h-5.774l8.66-40.7356h16.359l1.988 22.9659 12.317-22.9659h16.487L168.977 63Zm42.579 0h-15.011l-.898-10.1999h-11.868L179.225 63h-6.223l18.924-40.7356h15.204L211.556 63Zm-25.66-14.8829h9.302l-1.475-17.4489-7.827 17.4489Zm32.218-25.8527h14.626l2.181 27.5848 13.343-27.5848h6.351L235.627 63h-15.14l-2.373-40.7356Zm40.675 0h27.007l-1.026 4.8755h-13.087l-2.694 12.381h10.969l-1.026 4.8113h-10.97l-2.951 13.7282h13.087L277.136 63h-27.008l8.661-40.7356Zm62.67 4.8755h-10.328L303.497 63h-13.856l7.633-35.8601h-10.199l1.154-4.8755h34.321l-1.091 4.8755ZM60.5084 80.4463v-9.8552h5.9093v1.0587h-4.7159v3.3299h4.2731v1.0587h-4.2731v4.4079h-1.1934Zm7.1267 0H66.384l3.6187-9.8552h1.2319l3.6187 9.8552h-1.2512l-2.945-8.2961h-.077l-2.945 8.2961Zm.462-3.8497h5.0431v1.0587h-5.0431v-1.0587Zm8.2912 3.8497v-9.8552h3.33c.7699 0 1.4019.1315 1.896.3946.494.2599.8597.6176 1.0971 1.0731.2374.4555.3561.9736.3561 1.5543s-.1187 1.0956-.3561 1.5447c-.2374.4491-.6015.802-1.0923 1.0587-.4909.2534-1.118.3801-1.8816.3801h-2.6947v-1.0779h2.6562c.5262 0 .9496-.077 1.2704-.231.3241-.154.5582-.3721.7026-.6544.1476-.2855.2214-.6256.2214-1.0202 0-.3946-.0738-.7395-.2214-1.0346-.1476-.2951-.3834-.5229-.7074-.6833-.324-.1636-.7523-.2454-1.2848-.2454h-2.0981v8.7965h-1.1934Zm4.6389-4.4271 2.4253 4.4271h-1.3859l-2.3868-4.4271h1.3474Zm4.0289-5.4281h1.4244l3.3492 8.1806h.1155l3.3492-8.1806h1.4244v9.8552h-1.1164v-7.4876h-.0962l-3.0798 7.4876h-1.0779l-3.0797-7.4876h-.0963v7.4876h-1.1164v-9.8552Zm12.4597 9.8552h-1.2511l3.6187-9.8552h1.2316l3.619 9.8552h-1.251l-2.945-8.2961h-.077l-2.9452 8.2961Zm.462-3.8497h5.0432v1.0587h-5.0432v-1.0587Zm15.7582-2.9257h-1.193c-.071-.3433-.194-.6449-.371-.9047a2.467 2.467 0 0 0-.635-.6545c-.247-.1796-.521-.3144-.823-.4042-.301-.0898-.616-.1347-.943-.1347-.597 0-1.137.1508-1.622.4523-.481.3016-.864.7459-1.15 1.333-.282.587-.423 1.3073-.423 2.1606 0 .8533.141 1.5736.423 2.1606.286.5871.669 1.0314 1.15 1.333.485.3015 1.025.4523 1.622.4523.327 0 .642-.0449.943-.1347.302-.0898.576-.223.823-.3994.25-.1797.462-.3994.635-.6593.177-.263.3-.5646.371-.9047h1.193c-.09.5037-.253.9544-.491 1.3522-.237.3978-.532.7363-.885 1.0154-.353.2759-.749.486-1.189.6304-.436.1443-.903.2165-1.4.2165-.84 0-1.588-.2053-2.242-.6159-.655-.4107-1.17-.9945-1.545-1.7516s-.563-1.6554-.563-2.6948c0-1.0394.188-1.9377.563-2.6948.375-.7571.89-1.3409 1.545-1.7516.654-.4106 1.402-.6159 2.242-.6159.497 0 .964.0722 1.4.2165.44.1444.836.3561 1.189.6352.353.2759.648.6128.885 1.0106.238.3945.401.8453.491 1.3522Zm3.122-3.0798v9.8552h-1.193v-9.8552h1.193Zm2.797 9.8552h-1.251l3.619-9.8552h1.232l3.618 9.8552h-1.251l-2.945-8.2961h-.077l-2.945 8.2961Zm.462-3.8497h5.043v1.0587h-5.043v-1.0587Zm12.507-6.0055 2.925 8.2961h.116l2.926-8.2961h1.251l-3.619 9.8552h-1.232l-3.618-9.8552h1.251Zm8.753 9.8552v-9.8552h5.948v1.0587h-4.755v3.3299h4.447v1.0587h-4.447v3.3492h4.832v1.0587h-6.025Zm7.56-8.7965v-1.0587h7.391v1.0587h-3.099v8.7965h-1.193v-8.7965h-3.099Zm9.233 8.7965v-9.8552h5.948v1.0587h-4.755v3.3299h4.447v1.0587h-4.447v3.3492h4.832v1.0587h-6.025Zm8.099 0v-9.8552h3.33c.77 0 1.402.1315 1.896.3946.494.2599.859.6176 1.097 1.0731.237.4555.356.9736.356 1.5543s-.119 1.0956-.356 1.5447c-.238.4491-.602.802-1.093 1.0587-.49.2534-1.118.3801-1.881.3801h-2.695v-1.0779h2.656c.527 0 .95-.077 1.271-.231.324-.154.558-.3721.702-.6544.148-.2855.222-.6256.222-1.0202 0-.3946-.074-.7395-.222-1.0346-.147-.2951-.383-.5229-.707-.6833-.324-.1636-.752-.2454-1.285-.2454h-2.098v8.7965h-1.193Zm4.639-4.4271 2.425 4.4271h-1.386l-2.387-4.4271h1.348Zm5.222-5.4281v9.8552h-1.193v-9.8552h1.193Zm10.208 0v9.8552h-1.155l-5.371-7.7379h-.096v7.7379h-1.193v-9.8552h1.155l5.389 7.7571h.096v-7.7571h1.175Zm2.792 9.8552h-1.251l3.618-9.8552h1.232l3.619 9.8552h-1.251l-2.945-8.2961h-.077l-2.945 8.2961Zm.462-3.8497h5.043v1.0587h-5.043v-1.0587Zm8.291 3.8497v-9.8552h3.33c.77 0 1.402.1315 1.896.3946.494.2599.86.6176 1.097 1.0731.238.4555.356.9736.356 1.5543s-.118 1.0956-.356 1.5447c-.237.4491-.601.802-1.092 1.0587-.491.2534-1.118.3801-1.882.3801h-2.695v-1.0779h2.657c.526 0 .949-.077 1.27-.231.324-.154.558-.3721.703-.6544.147-.2855.221-.6256.221-1.0202 0-.3946-.074-.7395-.221-1.0346-.148-.2951-.384-.5229-.708-.6833-.324-.1636-.752-.2454-1.285-.2454h-2.098v8.7965h-1.193Zm4.639-4.4271 2.425 4.4271h-1.386l-2.387-4.4271h1.348Zm5.222-5.4281v9.8552h-1.193v-9.8552h1.193Zm2.797 9.8552h-1.251l3.619-9.8552h1.232l3.618 9.8552h-1.251l-2.945-8.2961h-.077l-2.945 8.2961Zm.462-3.8497h5.043v1.0587h-5.043v-1.0587Zm20.418-1.0779c0 1.0394-.188 1.9377-.563 2.6948-.375.7571-.89 1.3409-1.545 1.7516-.654.4106-1.402.6159-2.242.6159-.841 0-1.588-.2053-2.243-.6159-.654-.4107-1.169-.9945-1.544-1.7516-.376-.7571-.563-1.6554-.563-2.6948 0-1.0394.187-1.9377.563-2.6948.375-.7571.89-1.3409 1.544-1.7516.655-.4106 1.402-.6159 2.243-.6159.84 0 1.588.2053 2.242.6159.655.4107 1.17.9945 1.545 1.7516s.563 1.6554.563 2.6948Zm-1.155 0c0-.8533-.143-1.5736-.428-2.1606-.283-.5871-.666-1.0314-1.15-1.333-.482-.3015-1.021-.4523-1.617-.4523-.597 0-1.137.1508-1.622.4523-.481.3016-.864.7459-1.15 1.333-.282.587-.423 1.3073-.423 2.1606 0 .8533.141 1.5736.423 2.1606.286.5871.669 1.0314 1.15 1.333.485.3015 1.025.4523 1.622.4523.596 0 1.135-.1508 1.617-.4523.484-.3016.867-.7459 1.15-1.333.285-.587.428-1.3073.428-2.1606Zm10.976-4.9276v9.8552h-1.154l-5.371-7.7379h-.096v7.7379h-1.193v-9.8552h1.154l5.39 7.7571h.096v-7.7571h1.174Zm2.388 9.8552v-9.8552h1.194v8.7965h4.581v1.0587h-5.775Zm8.816-9.8552v9.8552h-1.193v-9.8552h1.193Zm10.208 0v9.8552h-1.155l-5.37-7.7379h-.097v7.7379h-1.193v-9.8552h1.155l5.389 7.7571h.097v-7.7571h1.174Zm2.388 9.8552v-9.8552h5.948v1.0587h-4.755v3.3299h4.447v1.0587h-4.447v3.3492h4.832v1.0587h-6.025Z"/></svg>),
  LogoSmall: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="69" height="65" fill="none"><path fill="#627941" d="M0 15.8816C0 7.3771 6.8942.4829 15.3987.4829h52.9716v48.431c0 8.5044-6.8942 15.3987-15.3987 15.3987H0v-48.431Z"/><path fill="#fff" d="M27.2375 14.0584h27.0073l-1.0264 4.8754H40.0676l-2.5019 11.7396h10.9697l-1.0264 4.9395H36.5393l-4.1057 19.181H18.5771l8.6604-40.7355Z"/></svg>),
  LogoWhite: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="230" height="66" fill="none"><path fill="#fff" d="M0 18.552C0 12.7305 4.7193 8.0112 10.5408 8.0112H230V55.234c0 5.8215-4.719 10.5407-10.541 10.5407H0V18.552Z"/><path fill="#65754B" d="M15.2881 15.1155h18.4872l-.7026 3.3374h-9.0021l-1.7126 8.036h7.5091l-.7026 3.3813h-7.5091L18.845 43H9.36l5.9281-27.8845ZM53.6711 43H43.3956l-.6148-6.9821H34.657L31.5392 43h-4.2595l12.9542-27.8845h10.4072L53.6711 43Zm-17.565-10.1877h6.3673l-1.01-11.9442-5.3573 11.9442Zm47.0111-11.066c0 1.7273-.4831 3.3227-1.4491 4.7865-.9661 1.4638-2.5616 2.5762-4.7865 3.3374L81.9755 43H72.183l-3.8643-12.1638h-.4831L65.2448 43h-9.4851l5.9282-27.8845h11.549c1.3466 0 2.6201.0879 3.8204.2635 1.2002.1464 2.2395.4684 3.1177.9661.9076.4684 1.6248 1.1417 2.1518 2.02.5269.8489.7904 1.976.7904 3.3812Zm-12.6468 6.2795c.7611 0 1.4052-.2488 1.9321-.7465.5563-.5269.9954-1.1563 1.3174-1.8882.3513-.7319.6001-1.5077.7465-2.3274.1464-.849.2196-1.5808.2196-2.1956 0-.7612-.1318-1.4052-.3952-1.9322-.2635-.5562-.8344-.8343-1.7126-.8343h-1.9761l-2.1956 9.9242h2.0639ZM115.78 43h-9.749l4.04-18.9702L99.664 43h-5.9721l-1.9761-19.6289L87.5002 43h-3.9521l5.9282-27.8845h11.1977l1.361 15.7207 8.431-15.7207h11.286L115.78 43Zm29.147 0h-10.276l-.614-6.9821h-8.124L122.795 43h-4.26l12.955-27.8845h10.407L144.927 43Zm-17.565-10.1877h6.367l-1.01-11.9442-5.357 11.9442Zm22.053-17.6968h10.013l1.493 18.8824 9.133-18.8824h4.348L161.404 43H151.04l-1.625-27.8845Zm27.843 0h18.488l-.703 3.3374h-8.958l-1.844 8.4751h7.509l-.703 3.2935h-7.509l-2.02 9.3972h8.958L189.817 43H171.33l5.928-27.8845Zm42.9 3.3374h-7.07L207.862 43h-9.485l5.226-24.5471h-6.982l.79-3.3374h23.493l-.746 3.3374ZM41.5176 55.1689v-6.7461h4.045v.7247h-3.2281v2.2795h2.925v.7246h-2.925v3.0173h-.8169Zm4.8784 0h-.8565l2.4771-6.7461h.8433l2.4771 6.7461h-.8565l-2.0159-5.6788h-.0527l-2.0159 5.6788Zm.3162-2.6352h3.4521v.7247h-3.4521v-.7247Zm5.6756 2.6352v-6.7461h2.2794c.527 0 .9596.0901 1.2978.2701.3382.1779.5886.4228.7511.7346.1625.3118.2437.6665.2437 1.064 0 .3974-.0812.7499-.2437 1.0573-.1625.3075-.4118.549-.7478.7247-.336.1735-.7653.2602-1.2879.2602h-1.8447v-.7378h1.8183c.3602 0 .65-.0527.8696-.1581.2218-.1054.3821-.2548.481-.448.101-.1954.1515-.4282.1515-.6983s-.0505-.5062-.1515-.7082c-.1011-.2021-.2625-.358-.4843-.4678-.2218-.112-.5149-.168-.8795-.168h-1.4361v6.0214h-.8169Zm3.1754-3.0304 1.6601 3.0304h-.9486l-1.6339-3.0304h.9224Zm2.7579-3.7157h.975l2.2926 5.5998h.0791l2.2926-5.5998h.975v6.7461h-.7642v-5.1254h-.0659l-2.1081 5.1254h-.7379l-2.1081-5.1254h-.0659v5.1254h-.7642v-6.7461Zm8.5289 6.7461h-.8564l2.4771-6.7461h.8433l2.477 6.7461h-.8564l-2.0159-5.6788h-.0527l-2.016 5.6788Zm.3163-2.6352h3.4521v.7247h-3.4521v-.7247Zm10.787-2.0027h-.8169c-.0483-.235-.1329-.4414-.2537-.6193a1.689 1.689 0 0 0-.4348-.448 1.8476 1.8476 0 0 0-.5632-.2767 2.2534 2.2534 0 0 0-.6457-.0922c-.4084 0-.7785.1032-1.11.3097-.3294.2064-.5919.5105-.7873.9124-.1933.4019-.2899.8949-.2899 1.479 0 .5841.0966 1.0771.2899 1.479.1954.4019.4579.706.7873.9124.3315.2065.7016.3097 1.11.3097a2.25 2.25 0 0 0 .6457-.0923 1.8867 1.8867 0 0 0 .5632-.2734 1.7337 1.7337 0 0 0 .4348-.4512c.1208-.1801.2054-.3865.2537-.6193h.8169c-.0615.3448-.1735.6533-.336.9256-.1625.2723-.3645.504-.6061.695-.2416.1889-.5128.3327-.8136.4315-.2987.0989-.6182.1483-.9586.1483-.5753 0-1.087-.1406-1.535-.4217-.448-.281-.8004-.6807-1.0573-1.199-.257-.5182-.3854-1.1331-.3854-1.8446s.1284-1.3264.3854-1.8446c.2569-.5183.6093-.918 1.0573-1.1991.448-.281.9597-.4216 1.535-.4216.3404 0 .6599.0494.9586.1482.3008.0989.572.2438.8136.4348.2416.1889.4436.4195.6061.6918.1625.2701.2745.5786.336.9256Zm2.137-2.1082v6.7461h-.8169v-6.7461h.8169Zm1.9146 6.7461h-.8564l2.477-6.7461h.8433l2.4771 6.7461h-.8564l-2.016-5.6788h-.0527l-2.0159 5.6788Zm.3162-2.6352h3.4521v.7247h-3.4521v-.7247Zm8.5611-4.1109 2.0028 5.6789h.079l2.0028-5.6789h.8564l-2.4771 6.7461h-.8432l-2.4771-6.7461h.8564Zm5.9918 6.7461v-6.7461h4.071v.7247h-3.2541v2.2795h3.0441v.7246h-3.0441v2.2927h3.3071v.7246h-4.124Zm5.175-6.0214v-.7247h5.059v.7247h-2.121v6.0214h-.817v-6.0214h-2.121Zm6.32 6.0214v-6.7461h4.072v.7247h-3.255v2.2795h3.044v.7246h-3.044v2.2927h3.307v.7246h-4.124Zm5.544 0v-6.7461h2.279c.528 0 .96.0901 1.298.2701.338.1779.589.4228.751.7346.163.3118.244.6665.244 1.064 0 .3974-.081.7499-.244 1.0573-.162.3075-.411.549-.747.7247-.336.1735-.766.2602-1.288.2602h-1.845v-.7378h1.818c.36 0 .65-.0527.87-.1581.222-.1054.382-.2548.481-.448.101-.1954.151-.4282.151-.6983s-.05-.5062-.151-.7082c-.101-.2021-.263-.358-.484-.4678-.222-.112-.515-.168-.88-.168h-1.436v6.0214h-.817Zm3.175-3.0304 1.661 3.0304h-.949l-1.634-3.0304h.922Zm3.575-3.7157v6.7461h-.817v-6.7461h.817Zm6.988 0v6.7461h-.791l-3.676-5.2967h-.066v5.2967h-.817v-6.7461h.791l3.689 5.31h.066v-5.31h.804Zm1.911 6.7461h-.856l2.477-6.7461h.843l2.477 6.7461h-.856l-2.016-5.6788h-.053l-2.016 5.6788Zm.316-2.6352h3.452v.7247h-3.452v-.7247Zm5.676 2.6352v-6.7461h2.279c.527 0 .96.0901 1.298.2701.338.1779.589.4228.751.7346.163.3118.244.6665.244 1.064 0 .3974-.081.7499-.244 1.0573-.162.3075-.412.549-.748.7247-.336.1735-.765.2602-1.288.2602h-1.844v-.7378h1.818c.36 0 .65-.0527.87-.1581.221-.1054.382-.2548.481-.448.101-.1954.151-.4282.151-.6983s-.05-.5062-.151-.7082c-.101-.2021-.263-.358-.485-.4678-.221-.112-.515-.168-.879-.168h-1.436v6.0214h-.817Zm3.175-3.0304 1.66 3.0304h-.948l-1.634-3.0304h.922Zm3.575-3.7157v6.7461h-.817v-6.7461h.817Zm1.915 6.7461h-.857l2.477-6.7461h.844l2.477 6.7461h-.857l-2.016-5.6788h-.052l-2.016 5.6788Zm.316-2.6352h3.452v.7247h-3.452v-.7247Zm13.976-.7378c0 .7115-.128 1.3264-.385 1.8446-.257.5183-.61.918-1.058 1.199-.447.2811-.959.4217-1.535.4217-.575 0-1.087-.1406-1.535-.4217-.447-.281-.8-.6807-1.057-1.199-.257-.5182-.385-1.1331-.385-1.8446s.128-1.3264.385-1.8446c.257-.5183.61-.918 1.057-1.1991.448-.281.96-.4216 1.535-.4216.576 0 1.088.1406 1.535.4216.448.2811.801.6808 1.058 1.1991.257.5182.385 1.1331.385 1.8446Zm-.79 0c0-.5841-.098-1.0771-.293-1.479-.194-.4019-.456-.706-.788-.9124-.329-.2065-.698-.3097-1.107-.3097-.408 0-.778.1032-1.11.3097-.329.2064-.591.5105-.787.9124-.193.4019-.29.8949-.29 1.479 0 .5841.097 1.0771.29 1.479.196.4019.458.706.787.9124.332.2065.702.3097 1.11.3097.409 0 .778-.1032 1.107-.3097.332-.2064.594-.5105.788-.9124.195-.4019.293-.8949.293-1.479Zm7.513-3.3731v6.7461h-.79l-3.676-5.2967h-.066v5.2967h-.817v-6.7461h.79l3.69 5.31h.066v-5.31h.803Zm1.635 6.7461v-6.7461h.817v6.0215h3.136v.7246h-3.953Zm6.035-6.7461v6.7461h-.817v-6.7461h.817Zm6.987 0v6.7461h-.791l-3.676-5.2967h-.066v5.2967h-.817v-6.7461h.791l3.689 5.31h.066v-5.31h.804Zm1.635 6.7461v-6.7461h4.071v.7247h-3.254v2.2795h3.043v.7246h-3.043v2.2927h3.307v.7246h-4.124Z"/></svg>),
  Burger: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="none"><g clipPath="url(#a)"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4.625 9.25h27.75M4.625 18.5h27.75m-27.75 9.25h27.75"/></g><defs><clipPath id="a"><path fill="#fff" d="M37 0H0v37h37z"/></clipPath></defs></svg>),
  Lupa: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path fill="#fff" d="m22.2993 20.5757-4.5942-4.5943a8.4859 8.4859 0 0 0 1.7011-5.1064c0-4.7041-3.8271-8.5313-8.5312-8.5313S2.3437 6.171 2.3437 10.875s3.8272 8.5312 8.5313 8.5312a8.4859 8.4859 0 0 0 5.1064-1.7011l4.5943 4.5942a1.2204 1.2204 0 0 0 2.0337-.8759 1.2202 1.2202 0 0 0-.3101-.8477ZM4.7813 10.875a6.0938 6.0938 0 1 1 6.0937 6.0937 6.1008 6.1008 0 0 1-6.0938-6.0937Z"/></svg>),
  LocationFooter: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#F3F4EC" d="M8.9728 1.4954c-3.2982 0-5.9818 2.6835-5.9818 5.978-.0217 4.819 5.7545 8.8149 5.9818 8.9764 0 0 6.0034-4.1574 5.9818-8.9727 0-3.2982-2.6836-5.9817-5.9818-5.9817Zm0 8.9726c-1.6525 0-2.9909-1.3384-2.9909-2.9909 0-1.6524 1.3384-2.9909 2.9909-2.9909 1.6525 0 2.9909 1.3385 2.9909 2.991 0 1.6524-1.3384 2.9908-2.991 2.9908Z"/></svg>),
  InstagramFooter: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#F3F4EC" d="M9.7714 1.5c.8438.0023 1.272.0068 1.6418.0172l.1455.0053c.168.006.3337.0135.534.0225.798.0375 1.3425.1635 1.8202.3488.495.1905.912.4485 1.329.8647.3814.375.6765.8284.8648 1.329.1852.4777.3112 1.0222.3487 1.821.009.1995.0165.3652.0225.534l.0045.1455c.0113.369.0158.7973.0173 1.641l.0007.5595v.9825a59.0588 59.0588 0 0 1-.0172 1.641l-.0045.1455c-.006.1687-.0135.3345-.0225.534-.0375.7988-.165 1.3425-.3495 1.821a3.6623 3.6623 0 0 1-.8648 1.329 3.6873 3.6873 0 0 1-1.329.8648c-.4777.1852-1.0222.3112-1.8202.3487-.178.0084-.356.0159-.534.0225l-.1455.0045c-.3698.0105-.798.0158-1.6418.0173L9.212 16.5h-.9817a58.7287 58.7287 0 0 1-1.6418-.0173l-.1455-.0044a47.5791 47.5791 0 0 1-.534-.0233c-.798-.0375-1.3425-.1635-1.821-.3487a3.6678 3.6678 0 0 1-1.3282-.8648 3.678 3.678 0 0 1-.8655-1.329c-.1853-.4778-.3113-1.0222-.3488-1.821a56.0622 56.0622 0 0 1-.0225-.534l-.0037-.1455a59.294 59.294 0 0 1-.0188-1.641V8.229c-.002-.547.0034-1.0941.0165-1.641l.0053-.1455c.006-.1688.0135-.3345.0225-.534.0375-.7988.1635-1.3425.3487-1.821a3.66 3.66 0 0 1 .867-1.329 3.6728 3.6728 0 0 1 1.3275-.8648c.4785-.1852 1.0223-.3112 1.821-.3487.1995-.009.366-.0165.534-.0225l.1455-.0045a59.2167 59.2167 0 0 1 1.641-.0172L9.7714 1.5Zm-.771 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 1-1.5902 3.841 2.2501 2.2501 0 0 1 1.591-3.841m3.9375-2.625a.9373.9373 0 0 0-.6629 1.6004.9373.9373 0 0 0 1.6004-.6629.9376.9376 0 0 0-.9375-.9375Z"/></svg>),
  PhoneFooter: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><g clipPath="url(#a)"><path fill="#F3F4EC" d="M15.4523 12.4417c-1.0684-.9138-2.1527-1.4674-3.208-.5549l-.6302.5515c-.461.4003-1.3183 2.2707-4.6326-1.542-3.3137-3.8078-1.3418-4.4007-.88-4.7976l.6336-.5521c1.0498-.9145.6536-2.0658-.1036-3.2509l-.4569-.7178C5.414.3956 4.5858-.3809 3.5332.5323l-.5687.4969c-.4652.3389-1.7656 1.4405-2.081 3.5332-.3796 2.511.818 5.3863 3.5615 8.5412 2.74 3.1563 5.4229 4.7417 7.9642 4.7141 2.1121-.0228 3.3876-1.1561 3.7865-1.5681l.5708-.4977c1.0498-.9124.3975-1.8414-.6716-2.7573l-.6426-.5529Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h17.9453v17.9453H0z"/></clipPath></defs></svg>),
  LetterFooter: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#F3F4EC" fillRule="evenodd" d="M2.379 3.879C1.5 4.7572 1.5 6.1718 1.5 9c0 2.8282 0 4.2427.879 5.121C3.2572 15 4.6718 15 7.5 15h3c2.8282 0 4.2427 0 5.121-.879.879-.8783.879-2.2928.879-5.121 0-2.8282 0-4.2428-.879-5.121C14.7427 3 13.3282 3 10.5 3h-3c-2.8282 0-4.2428 0-5.121.879ZM13.932 5.64a.5627.5627 0 0 1-.072.792l-1.647 1.3725c-.6653.555-1.2038 1.0035-1.68 1.3095-.495.3187-.9772.5197-1.533.5197-.5557 0-1.038-.2017-1.5338-.5197-.4754-.306-1.014-.7553-1.6792-1.3088L4.14 6.4329a.5626.5626 0 0 1 .72-.8648l1.62 1.3493c.6997.5827 1.185.9862 1.596 1.2502.3967.255.666.3412.9247.3412.2588 0 .528-.0854.9248-.3412.4102-.264.8962-.6675 1.596-1.2503l1.6192-1.35a.5626.5626 0 0 1 .4111-.1276.561.561 0 0 1 .3802.2004Z" clipRule="evenodd"/></svg>),
  FLogo: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="83" height="78" fill="none"><mask id="a" fill="#fff"><path d="M0 18.6955C0 8.3703 8.3703 0 18.6955 0h63.3127c.5522 0 1 .4477 1 1v57.7998c0 10.3253-8.3703 18.6956-18.6956 18.6956H1c-.5523 0-1-.4477-1-1V18.6955Z"/></mask><path fill="#627941" stroke="#fff" strokeWidth="6" d="M0 18.6955C0 8.3703 8.3703 0 18.6955 0h63.3127c.5522 0 1 .4477 1 1v57.7998c0 10.3253-8.3703 18.6956-18.6956 18.6956H1c-.5523 0-1-.4477-1-1V18.6955Z" mask="url(#a)"/><path fill="#fff" d="M33.3039 16.1346h32.7895l-1.2462 5.9193H48.8808l-3.0375 14.2529h13.3183l-1.2461 5.9972H44.5972l-4.9847 23.2876H22.7894l10.5145-49.457Z"/></svg>),
  CloseBurger: (props: T) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="32" height="29" fill="none"><path fill="#fff" d="M7.7654 4.3887 16 11.8514l8.192-7.424c.181-.1746.399-.3142.6409-.4105a2.1364 2.1364 0 0 1 .7671-.1502c.5658 0 1.1085.2037 1.5085.5663.4001.3625.6249.8543.6249 1.367a1.5994 1.5994 0 0 1-.1426.692c-.0991.2194-.2466.4181-.4334.584L18.8587 14.5l8.2987 7.5207c.3516.3117.5578.7339.576 1.1793 0 .5128-.2248 1.0045-.6249 1.3671-.4.3626-.9427.5663-1.5085.5663a2.1457 2.1457 0 0 1-.7965-.1208c-.2534-.0899-.4834-.2265-.6755-.4012L16 17.1487 7.7867 24.592a1.978 1.978 0 0 1-.6336.3964 2.1375 2.1375 0 0 1-.753.145c-.5659 0-1.1085-.2037-1.5086-.5663-.4-.3626-.6248-.8543-.6248-1.3671a1.5979 1.5979 0 0 1 .1426-.6919c.099-.2194.2465-.4182.4334-.5841l8.2987-7.424-8.2987-7.5206c-.3516-.3118-.5578-.7339-.576-1.1794 0-.5127.2248-1.0045.6248-1.367.4001-.3626.9427-.5663 1.5085-.5663.512.0058 1.0027.1933 1.3654.522Z"/></svg>)
}
