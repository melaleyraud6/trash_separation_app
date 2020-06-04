

// //  $(document).on("turbolinks:load",function(){
//  $(function(){ 


//   var search_list = $("#trash-list");
  

 
//   function appendTrash(trash) {
    
//      var html =  `
//                   <tr> 
//                     <td> ${trash.name}</td> 
//                     <td> ${trash.separation}</td> 
//                     <td>${trash.color_division}</td> 
//                  </tr>
//                   `    
//      search_list.append(html) ;
//   }
  
   


//   function appendErrMsgToHTML(msg){
//    var html = `<div class = "name">${msg}</div> `
//    search_list.append(html);
//   } 
  
//     $(".search-form").on("keyup",function(e) {
//       e.preventDefault();
//       var input = $(".search-input").val();
//       // console.log(this); //フォームは取得できている
//       var url = $(this).attr('action');
//       // console.log(this); きちんと取得できている
//     //  debugger; //↓取得したデータをa.jaxでjson形式にしてコントローラに送る
//       $.ajax({
//         type: 'get',
//         url: url,
//         data: {keyword: input},
//         dataType: 'json'
//       })
//      .done(function(trashes) {
//        console.log(trashes); 
//       //  データのレスポンスは確認できている 
//       $('#trash-list').empty();
//       if (trashes.length !== 0) {
//         trashes.forEach(function(trash){
//           appendTrash(trash);
//         });
//       } else  {
//         appendErrMsgToHTML("一致する名前がありません。");
//       }
//     //   }
//     // })
//     //   .fail(function(){
//     //     alert("error");
//     //   });  
//       });
//     });
//   });
// //  });
