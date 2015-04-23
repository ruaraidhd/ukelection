Seats = new Mongo.Collection("seats");
Parties = new Mongo.Collection("parties");

var availableTags = [
  "South_East_Cornwall","St_Austell_and_Newquay","Camborne_and_Redruth","Truro_and_Falmouth","North_Cornwall","St_Ives","Plymouth_Moor_View","Newton_Abbot","Exeter","Central_Devon","Tiverton_and_Honiton","North_Devon","Totnes","Torbay","Torridge_and_West_Devon","East_Devon","Plymouth_Sutton_and_Devonport","South_West_Devon","Yeovil","Taunton_Deane","Bridgwater_and_West_Somerset","Somerton_and_Frome","Wells","West_Dorset","Bournemouth_East","Poole","Bournemouth_West","Mid_Dorset_and_North_Poole","Christchurch","North_Dorset","South_Dorset","Weston-super-Mare","North_Somerset","Bristol_West","Bristol_South","Bristol_East","North_East_Somerset","Filton_and_Bradley_Stoke","Kingswood","Thornbury_and_Yate","Bath","Bristol_North_West","Salisbury","Devizes","South_Swindon","North_Swindon","South_West_Wiltshire","Chippenham","North_Wiltshire","Cheltenham","Tewkesbury","Forest_of_Dean","Stroud","Gloucester","The_Cotswolds","Aldershot","North_East_Hampshire","North_West_Hampshire","Basingstoke","Havant","Portsmouth_South","New_Forest_East","New_Forest_West","Winchester","Southampton__Itchen","Southampton__Test","Eastleigh","Gosport","Portsmouth_North","Fareham","Meon_Valley","East_Hampshire","Romsey_and_Southampton_North","Isle_of_Wight","Bognor_Regis_and_Littlehampton","Worthing_West","East_Worthing_and_Shoreham","Arundel_and_South_Downs","Mid_Sussex","Horsham","Crawley","Chichester","Hove","Brighton__Kemptown","Brighton__Pavilion","Eastbourne","Lewes","Hastings_and_Rye","Bexhill_and_Battle","Wealden","West_Suffolk","South_Suffolk","Bury_St_Edmunds","Ipswich","Suffolk_Coastal","Central_Suffolk_and_North_Ipswich","Waveney","Broadland","North_Norfolk","South_Norfolk","South_West_Norfolk","Mid_Norfolk","Norwich_South","Norwich_North","Great_Yarmouth","North_West_Norfolk","Boston_and_Skegness","Louth_and_Horncastle","Grantham_and_Stamford","Sleaford_and_North_Hykeham","Lincoln","Gainsborough","South_Holland_and_the_Deepings","Great_Grimsby","Cleethorpes","Scunthorpe","Kingston-upon-Hull_West_and_Hessle","Kingston-upon-Hull_East","Kingston-upon-Hull_North","Haltemprice_and_Howden","Beverley_and_Holderness","East_Yorkshire","Brigg_and_Goole","York_Outer","Selby_and_Ainsty","Harrogate_and_Knaresborough","Skipton_and_Ripon","Thirsk_and_Malton","Richmond_Yorks","Scarborough_and_Whitby","York_Central","Stockton_South","Middlesbrough_South_and_East_Cleveland","Middlesbrough","Redcar","Stockton_North","Hartlepool","Bishop_Auckland","Darlington","Sedgefield","Easington","North_Durham","City_of_Durham","North_West_Durham","Newcastle-upon-Tyne_East","Houghton_and_Sunderland_South","Washington_and_Sunderland_West","Sunderland_Central","Gateshead","Blaydon","Jarrow","South_Shields","North_Tyneside","Tynemouth","Newcastle-upon-Tyne_Central","Newcastle-upon-Tyne_North","Blyth_Valley","Hexham","Wansbeck","Berwick-upon-Tweed","Copeland","Workington","Penrith_and_the_Border","Carlisle","Westmorland_and_Lonsdale","Barrow_and_Furness","Burnley","Pendle","West_Lancashire","South_Ribble","Chorley","Rossendale_and_Darwen","Blackburn","Hyndburn","Ribble_Valley","Blackpool_South","Blackpool_North_and_Cleveleys","Preston","Fylde","Wyre_and_Preston_North","Lancaster_and_Fleetwood","Morecambe_and_Lunesdale","Garston_and_Halewood","Liverpool_Wavertree","Liverpool_Riverside","Liverpool_West_Derby","Liverpool_Walton","Knowsley","St_Helens_South_and_Whiston","St_Helens_North","Bootle","Sefton_Central","Southport","Wirral_South","Birkenhead","Wallasey","Wirral_West","Leigh","Makerfield","Wigan","Bolton_West","Bolton_North_East","Bolton_South_East","Bury_South","Bury_North","Heywood_and_Middleton","Rochdale","Oldham_West_and_Royton","Oldham_East_and_Saddleworth","Salford_and_Eccles","Worsley_and_Eccles_South","Manchester_Central","Blackley_and_Broughton","Ashton-under-Lyne","Stalybridge_and_Hyde","Stretford_and_Urmston","Manchester_Withington","Manchester_Gorton","Denton_and_Reddish","Wythenshawe_and_Sale_East","Altrincham_and_Sale_West","Cheadle","Stockport","Hazel_Grove","Halton","Crewe_and_Nantwich","Eddisbury","City_of_Chester","Ellesmere_Port_and_Neston","Weaver_Vale","Congleton","Macclesfield","Tatton","Warrington_South","Warrington_North","Colne_Valley","Huddersfield","Dewsbury","Batley_and_Spen","Halifax","Calder_Valley","Bradford_South","Bradford_West","Bradford_East","Shipley","Keighley","Leeds_West","Pudsey","Leeds_North_West","Hemsworth","Normanton__Pontefract_and_Castleford","Wakefield","Morley_and_Outwood","Leeds_Central","Leeds_East","Leeds_North_East","Elmet_and_Rothwell","Sheffield__Heeley","Sheffield_Central","Sheffield_South_East","Sheffield__Brightside_and_Hillsborough","Sheffield_Hallam","Penistone_and_Stocksbridge","Rother_Valley","Rotherham","Wentworth_and_Dearne","Barnsley_East","Barnsley_Central","Doncaster_Central","Don_Valley","Doncaster_North","East_Surrey","Epsom_and_Ewell","Reigate","South_West_Surrey","Guildford","Mole_Valley","Esher_and_Walton","Woking","Surrey_Heath","Runnymede_and_Weybridge","Spelthorne","Newbury","Slough","Bracknell","Wokingham","Windsor","Reading_West","Reading_East","Maidenhead","Henley","Wantage","Oxford_East","Oxford_West_and_Abingdon","Witney","Banbury","Beaconsfield","Wycombe","Chesham_and_Amersham","Aylesbury","Buckingham","Milton_Keynes_South","Milton_Keynes_North","Sittingbourne_and_Sheppey","Gillingham_and_Rainham","Rochester_and_Strood","Sevenoaks","Gravesham","Dartford","Tonbridge_and_Malling","Chatham_and_Aylesford","Tunbridge_Wells","Maidstone_and_the_Weald","Faversham_and_Mid-Kent","Ashford","Canterbury","North_Thanet","Folkestone_and_Hythe","Dover","South_Thanet","Saffron_Walden","Colchester","Clacton","Harwich_and_North_Essex","Braintree","Epping_Forest","Thurrock","Southend_West","Castle_Point","South_Basildon_and_East_Thurrock","Rochford_and_Southend_East","Rayleigh_and_Wickford","Basildon_and_Billericay","Brentwood_and_Ongar","Harlow","Chelmsford","Maldon","Witham","Finchley_and_Golders_Green","Hendon","Chipping_Barnet","Ilford_North","Edmonton","Enfield__Southgate","Enfield_North","Hayes_and_Harlington","Uxbridge_and_South_Ruislip","Harrow_West","Ruislip__Northwood_and_Pinner","Harrow_East","Hampstead_and_Kilburn","Holborn_and_St._Pancras","Brent_Central","Brent_North","Hammersmith","Barking","Dagenham_and_Rainham","Romford","Hornchurch_and_Upminster","West_Ham","East_Ham","Poplar_and_Limehouse","Bethnal_Green_and_Bow","Cities_of_London_and_Westminster","Westminster_North","Chelsea_and_Fulham","Kensington","Twickenham","Kingston_and_Surbiton","Richmond_Park","Orpington","Beckenham","Bromley_and_Chislehurst","Lewisham_West_and_Penge","Lewisham_East","Lewisham__Deptford","Croydon_South","Croydon_Central","Croydon_North","Sutton_and_Cheam","Carshalton_and_Wallington","Mitcham_and_Morden","Wimbledon","Putney","Tooting","Battersea","Dulwich_and_West_Norwood","Streatham","Vauxhall","Camberwell_and_Peckham","Bermondsey_and_Old_Southwark","Old_Bexley_and_Sidcup","Bexleyheath_and_Crayford","Eltham","Greenwich_and_Woolwich","Erith_and_Thamesmead","Feltham_and_Heston","Brentford_and_Isleworth","Ilford_South","Leyton_and_Wanstead","Walthamstow","Chingford_and_Woodford_Green","Tottenham","Hornsey_and_Wood_Green","Islington_South_and_Finsbury","Islington_North","Ealing_Central_and_Acton","Ealing__Southall","Ealing_North","Hackney_South_and_Shoreditch","Hackney_North_and_Stoke_Newington","Huntingdon","Cambridge","South_Cambridgeshire","South_East_Cambridgeshire","Peterborough","North_West_Cambridgeshire","North_East_Cambridgeshire","St_Albans","Hemel_Hempstead","South_West_Hertfordshire","Watford","Hertsmere","Broxbourne","Hertford_and_Stortford","Welwyn_Hatfield","Stevenage","Hitchin_and_Harpenden","North_East_Hertfordshire","Luton_South","Luton_North","South_West_Bedfordshire","Bedford","Mid_Bedfordshire","North_East_Bedfordshire","Bolsover","Chesterfield","North_East_Derbyshire","South_Derbyshire","Erewash","Derby_South","Derby_North","Mid_Derbyshire","Amber_Valley","Derbyshire_Dales","High_Peak","Broxtowe","Ashfield","Mansfield","Nottingham_South","Nottingham_East","Nottingham_North","Gedling","Sherwood","Rushcliffe","Newark","Bassetlaw","Charnwood","Loughborough","Harborough","South_Leicestershire","Leicester_South","Leicester_East","Leicester_West","Bosworth","North_West_Leicestershire","Rutland_and_Melton","Northampton_South","Northampton_North","Wellingborough","Kettering","Corby","South_Northamptonshire","Daventry","Hereford_and_South_Herefordshire","North_Herefordshire","Ludlow","Shrewsbury_and_Atcham","Telford","The_Wrekin","North_Shropshire","Stoke-on-Trent_North","South_Staffordshire","Cannock_Chase","Stafford","Stone","Tamworth","Lichfield","Burton","Newcastle-under-Lyme","Stoke-on-Trent_South","Stoke-on-Trent_Central","Staffordshire_Moorlands","Bromsgrove","West_Worcestershire","Redditch","Worcester","Mid_Worcestershire","Wyre_Forest","Stratford-on-Avon","Warwick_and_Leamington","Kenilworth_and_Southam","Rugby","Nuneaton","North_Warwickshire","Coventry_South","Coventry_North_East","Coventry_North_West","Solihull","Meriden","Birmingham__Northfield","Birmingham__Selly_Oak","Birmingham__Hall_Green","Birmingham__Edgbaston","Birmingham__Yardley","Birmingham__Hodge_Hill","Birmingham__Ladywood","Birmingham__Erdington","Birmingham__Perry_Barr","Sutton_Coldfield","Halesowen_and_Rowley_Regis","Warley","West_Bromwich_East","West_Bromwich_West","Stourbridge","Dudley_South","Dudley_North","Wolverhampton_South_East","Wolverhampton_South_West","Wolverhampton_North_East","Walsall_South","Walsall_North","Aldridge-Brownhills","Argyll_and_Bute","Inverness__Nairn__Badenoch_and_Strathspey","Dumfries_and_Galloway","Dumfriesshire__Clydesdale_and_Tweeddale","Berwickshire__Roxburgh_and_Selkirk","Dunfermline_and_West_Fife","Kirkcaldy_and_Cowdenbeath","Glenrothes","North_East_Fife","Ochil_and_South_Perthshire","Ayr__Carrick_and_Cumnock","West_Dunbartonshire","Central_Ayrshire","East_Lothian","Midlothian","North_Ayrshire_and_Arran","Kilmarnock_and_Loudoun","Inverclyde","Linlithgow_and_East_Falkirk","Edinburgh_South_West","Edinburgh_South","Edinburgh_East","Edinburgh_North_and_Leith","Edinburgh_West","Livingston","Paisley_and_Renfrewshire_South","East_Kilbride__Strathaven_and_Lesmahagow","Paisley_and_Renfrewshire_North","East_Renfrewshire","Lanark_and_Hamilton_East","Motherwell_and_Wishaw","Airdrie_and_Shotts","Rutherglen_and_Hamilton_West","Glasgow_North_East","Glasgow_South_West","Glasgow_South","Glasgow_Central","Glasgow_East","Glasgow_North","Glasgow_North_West","Coatbridge__Chryston_and_Bellshill","East_Dunbartonshire","Cumbernauld__Kilsyth_and_Kirkintilloch_East","Falkirk","Stirling","Perth_and_North_Perthshire","Dundee_West","Dundee_East","Angus","Aberdeen_South","Aberdeen_North","West_Aberdeenshire_and_Kincardine","Gordon","Banff_and_Buchan","Moray","Ross__Skye_and_Lochaber","Caithness__Sutherland_and_Easter_Ross","Orkney_and_Shetland","Na_h-Eileanan_an_Iar","Preseli_Pembrokeshire","Arfon","Dwyfor_Meirionnydd","Ceredigion","Carmarthen_West_and_South_Pembrokeshire","Llanelli","Carmarthen_East_And_Dinefwr","Aberconwy","Aberavon","Swansea_East","Swansea_West","Gower","Neath","Vale_of_Glamorgan","Cardiff_South_and_Penarth","Cardiff_West","Cardiff_Central","Cardiff_North","Bridgend","Ogmore","Rhondda","Pontypridd","Newport_West","Newport_East","Cynon_Valley","Blaenau_Gwent","Caerphilly","Islwyn","Torfaen","Merthyr_Tydfil_and_Rhymney","Monmouth","Brecon_and_Radnorshire","Montgomeryshire","Clwyd_South","Clwyd_West","Vale_of_Clwyd","Delyn","Wrexham","Alyn_and_Deeside","Ynys_Mon","Newry_and_Armagh","West_Tyrone","Mid_Ulster","Foyle","East_Londonderry","Upper_Bann","South_Down","Lagan_Valley","Strangford","North_Down","East_Antrim","South_Antrim","North_Antrim","Fermanagh_and_South_Tyrone","Belfast_South","Belfast_West","Belfast_East","Belfast_North"
];

if (Meteor.isClient) {
  Meteor.startup(function(){
    Tracker.autorun(function(){
      // Session.set("labour_seats", Seats.find({party:"labour"}).count())
    });
  });

//    *** RESULTS ***

  Template.results.helpers({
    // I have no idea why this doesn't work.
    // labour_seats: Seats.find({party:"labour"}).count(),
    // tory_seats: 1,//function() {Seats.find({party:"tory"}).count()},
    tory_seats: Seats.find({party: "tory"}),
    labour_seats: Seats.find({party: "labour"}),
    libdem_seats: Seats.find({party: "libdem"}),
    snp_seats: Seats.find({party: "snp"}),
    ukip_seats: Seats.find({party: "ukip"}),
    green_seats: Seats.find({party: "green"}),
    plaid_seats: Seats.find({party: "pc"}),
  });

  Template.results.onRendered(function(){
    
  });

  Template.results.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

//    *** MAP ***

  Template.map.helpers({

  });

  Template.map.onRendered(function(){
    var paper = Snap('#svg');
    Snap.load("ge2010.svg", function (loadedFragment) {
        paper.append(loadedFragment);
        var new_grab = Snap.selectAll('.seat');
        // console.log('new_grab', new_grab);
        for (var i = 0, len = new_grab.length; i < len; i++) {
            new_grab[i].removeClass("tory libdem snp labour sf dup alliance pc sdlp respect ind respect");
            new_grab[i].addClass("undeclared");
        };
        // svgUpdate();
        Tracker.autorun(function(){
          svgUpdate();
        });
    });

  });

  Template.map.events({
    "mouseover path": function(event) {
      // console.log("path clicked: ", event.currentTarget.id);
      Session.set("mouseover_path", event.currentTarget.id);
    },
    "click path": function(event) {
      $("#tags-input").val(event.currentTarget.id);
      $("#parties_list").show();
    },
  });

  svgUpdate = function(){
    // var paper = Snap("#svg");
    console.log("SVG UPDATE!!!");
    // console.log(Seats.find({}));
    Seats.find({}).forEach(function(thisSeat) {
    // for (var i = Seats.find({}).length - 1; i >= 0; i--) {
      // thisSeat = Seats.find({})[i];
      // console.log("tag:", thisSeat.tag);
      var grab = Snap.select("#".concat(thisSeat.tag));
      // console.log('grab', grab);
      if (grab != null) {
      grab.removeClass("tory libdem snp labour sf dup alliance pc sdlp respect ind respect undeclared");
      grab.addClass(thisSeat.party);
    };
    });
  };

//    *** CHANGE ***

  Template.change.helpers({

  });

  Template.change.onRendered(function() {
      $( "#tags-input" ).autocomplete({
        source: availableTags,
        select: function(event, ui) {
          $("#parties_list").show();
        }
      });
      $("#parties_list").hide();
      console.log(availableTags);
  });

  Template.change.events({
    "submit #tags-form": function(event){
      return false;
    },
    "click .party_choice": function(event){ //How will this work if I select one seat then get another?
      $("#parties_list").hide();
      constituency = $("#tags-input").val();
      partyChoice = event.currentTarget.id;
      $("#tags-input").val("");
      //FIXME - if you edit the input after selecting a seat, you can screw this up...
      thisSeatId = Seats.findOne({tag:constituency})._id;
      Seats.update({_id:thisSeatId}, {$set: {party:partyChoice}});
      svgUpdate();
      // svgUpdate();
      console.log("labour seats: ", Seats.find({party:"labour"}).count());
      return false;
    },
    "blur #tags-input": function(event){
      if ($("#tags-input").val() == "") {
        $("#parties_list").hide();
      }
    }
  });

Tracker.autorun(function(computation){
  // svgUpdate(); 
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Seats.findOne()) {
      for (var i = availableTags.length - 1; i >= 0; i--) {
        console.log(availableTags[i]);
        Seats.insert({
        tag: availableTags[i],
        name: availableTags[i].replace("_", " "),
        party: "undeclared",
        });
      };
    };
    if (!Parties.findOne()) {
      // parties = ["tory", "libdem", "snp", "labour", "sf", "dup", "alliance", "pc", "sdlp", "respect", "ind", "respect"];
      // for i in 

    };
  });
}
