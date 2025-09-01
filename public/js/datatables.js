"use strict";

//Customize Datatable
function customizeDatatable(spaceName = "") {
  $(spaceName + ".datatable-filter-cell")
    .find(".input")
    .addClass("form-control border-start-0")
    .wrap("<div class='control input-group'></div>");

  var searchIcon = `
        <div class="input-group-text bg-white p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
    `;
  $(spaceName + ".datatable-filter-cell")
    .find(".control.input-group")
    .prepend(searchIcon);

  $(spaceName + ".datatable-filter-cell")
    .find("select")
    .addClass("border-start-0")
    .wrap(
      "<div class='field'><div class='control has-icons-left input-group flex-nowrap'><div class='select border-start-0' style='width:90%' ></div></div></div>"
    );
  var selectIcon = `
        <div class="icon is-small input-group-text bg-white border-end-0 p-1">
            <i class="icon ni ni-menu-alt-r"></i>
        </div>
    `;
  $(spaceName + ".datatable-filter-cell")
    .find(".control.has-icons-left")
    .prepend(selectIcon);
  $(spaceName + ".datatable-filter-cell")
    .find("select option:first-child")
    .html("Filter by");

  $(spaceName + ".is-datatable tbody td .checkbox input").on(
    "change",
    function () {
      $(this).closest("tr").toggleClass("is-selected");

      if (
        $(spaceName + ".is-datatable td .checkbox input:checked").length > 0
      ) {
        $(spaceName + ".field.has-addons").removeClass("is-disabled");
      } else {
        $(spaceName + ".field.has-addons").addClass("is-disabled");
      }
    }
  );

  $(spaceName + ".is-datatable th .checkbox input").on("change", function () {
    if ($(this).prop("checked") === true) {
      $(spaceName + ".is-datatable td .checkbox input")
        .prop("checked", true)
        .trigger("change");
      $(spaceName + ".field.has-addons").removeClass("is-disabled");
    } else {
      $(spaceName + ".is-datatable td .checkbox input")
        .prop("checked", false)
        .trigger("change");
      $(spaceName + ".field.has-addons").addClass("is-disabled");
    }
  });

  $(spaceName + ".pagination li").click(function () {
    $(spaceName + ".pagination li.is-selected").removeClass("is-selected");
    $(this).addClass("is-selected");
  });
}

$(document).ready(function () {
  if ($("#datatable-imported-student").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-imported-student"),
      {
        pageSize: 10,
        sort: {
          name: true,
          sexe: true,
          pv: true,
          profile: true,
          center: true,
          school: false,
          programm: true,
        },
        filters: {
          name: true,
          sexe: "select",
          pv: true,
          profile: "select",
          center: "select",
          school: "select",
          programm: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: dataHistoriqueImportStudent,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-courses").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-courses"),
      {
        pageSize: 10,
        sort: {
          code: true,
          name: true,
          dept: true,
        },
        filters: {
          code: true,
          name: true,
          dept: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
          //console.log(dataCourses);
        },
        data: dataCourses,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-courses-schedulled-admin").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-courses-schedulled-admin"),
      {
        pageSize: 10,
        sort: {
          //code: true,
          name: true,
          code: true,
          prog: true,
          dept: true,
          teacher: false,
          level: false,
          type: true,
          sem: false,
          session: false,
          status: true,
        },
        filters: {
          // code: false,
          name: true,
          code: true,
          prog: "select",
          dept: "select",
          teacher: true,
          level: "select",
          type: "select",
          sem: "select",
          session: "select",
          status: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
          // console.log(dataCoursesShed);
        },
        data: dataCoursesShed,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-courses-schedulled").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-courses-schedulled"),
      {
        pageSize: 10,
       sort: {
       
          name: true,
      
          prog: true,
          dept: true,
          teacher: false,
          level: false,
          type: true,
          sem: false,
          session: false,
          status: true,
        },
        filters: {
        
          name: true,
        
          prog: "select",
          dept: "select",
          teacher: true,
          level: "select",
          type: "select",
          sem: "select",
          session: "select",
          status: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
          // console.log(dataCoursesShed);
        },
        data: dataCoursesShed,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }

  if ($("#empty-datatable").length) {
    var datatable = new DataTable(document.querySelector("#empty-datatable"), {
      pageSize: 10,
      sort: {
        checkbox: false,
        type: false,
        name: false,
        size: true,
        version: true,
        updated: false,
        action: false,
      },
      filters: {
        checkbox: false,
        type: false,
        name: true,
        size: false,
        version: false,
        updated: false,
        action: false,
      },
      filterText: "Type to Filter... ",
      filterInputClass: "input",

      counterText: function (
        currentPage,
        totalPage,
        firstRow,
        lastRow,
        totalRow
      ) {
        return (
          "Showing " +
          firstRow +
          " to " +
          lastRow +
          " of " +
          totalRow +
          " items."
        );
      },
      counterDivSelector: ".datatable-info span",
      pagingDivSelector: "#paging-first-datatable",
      firstPage: false,
      lastPage: false,
      nextPage: '<i class="fas fa-angle-right"></i>',
      prevPage: '<i class="fas fa-angle-left"></i>',
      afterRefresh: function () {
        if (env === "development") {
          changeDemoImages();
        }
        initDropdowns();
      },
      data: [],
    });

    setTimeout(function () {
      //Change demo images
      if (env === "development") {
        changeDemoImages();
      }

      adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-teachers").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-teachers"),
      {
        pageSize: 10,
        sort: {
          name: true,
          matricule: true,
          course: false,
          phone: false,
          diplome: true,
          grade: false,
          type: true,
          sexe: true,
        },
        filters: {
          name: true,
          matricule: true,
          course: false,
          phone: false,
          diplome: "select",
          grade: "select",
          type: "select",
          sexe: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
          // console.log(dataCoursesShed);
        },
        data: datateacher,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-students-list").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-students-list"),
      {
        pageSize: 10,
        sort: {
          matricule: true,
          name: true,
          departement: true,
          programme: false,
          niveaux: true,
        },
        filters: {
          matricule: true,
          name: true,
          departement: "select",
          programme: "select",
          niveaux: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: listStudent,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-students-list-of-diploma").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-students-list-of-diploma"),
      {
        pageSize: 10,
        responsive: true,
        sort: {
          name: true,
          matricule: true,
          reference: true,

          departement: true,
        },
        filters: {
          name: true,
          matricule: true,
          reference: true,
          programme: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: listStudentOfDiploma,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-students-sms").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-students-sms"),
      {
        pageSize: 10,
        sort: {
          matricule: true,
          name: true,
          faculty: true,
          departement: true,
          programme: false,
          niveaux: true,
          nbrSms: true,
        },
        filters: {
          matricule: true,
          name: true,
          faculty: "select",
          departement: "select",
          programme: "select",
          niveaux: "select",
          nbrSms: true,
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: listSms,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-students-awating-approval").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-students-awating-approval"),
      {
        pageSize: 10,
        sort: {
          name: true,
          matricule: true,
          departement: true,

          programme: false,
          niveaux: true,
        },
        filters: {
          name: true,
          matricule: true,
          departement: "select",

          programme: "select",
          niveaux: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: listStudentpending,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-user-list").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-user-list"),
      {
        pageSize: 10,
        sort: {
          user: true,
          login: true,
          type: true,
          status: true,
        },
        filters: {
          user: true,
          login: true,
          type: "select",
          status: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: listUser,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-student-user-list").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-student-user-list"),
      {
        pageSize: 10,
        sort: {
          user: true,
          Department: true,
          programm: true,
          login: true,
          status: true,
          opt: false,
        },
        filters: {
          user: true,
          Department: "select",
          programm: "select",
          login: true,
          status: "select",
          opt: false,
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: listUserStudent,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-fees-scholarship").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-fees-scholarship"),
      {
        pageSize: 10,
        sort: {
          session: true,

          type: true,
          status: true,
          montant: true,
        },
        filters: {
          session: "select",

          type: "select",
          status: "select",
          montant: false,
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: fees,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-role-user").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-role-user"),
      {
        pageSize: 10,
        sort: {
          no: true,
          name: true,
          libelle: true,
        },
        filters: {
          no: false,
          name: true,
          libelle: true,
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: role,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-imported-marks").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-imported-marks"),
      {
        pageSize: 10,
        sort: {
          session: true,
          code: true,
          matiere: true,
          enseignant: true,
          departement: true,
          programme: true,
          niveaux: true,
          semester: true,
          status: true,
        },
        filters: {
          session: "select",
          code: true,
          matiere: true,
          enseignant: true,
          departement: "select",
          programme: "select",
          niveaux: "select",
          semester: "select",
          status: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: HistoryMarks,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-marks-marksheet").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-marks-marksheet"),
      {
        pageSize: 10,
        sort: {
          matricule: true,
          name: true,
          ncour: false,
          ncomposition: false,
          moyenne: false,
          nbr_session: true,
        },
        filters: {
          matricule: true,
          name: true,
          ncour: false,
          ncomposition: false,
          moyenne: false,
          nbr_session: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: listMarksheet,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-change-request").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-change-request"),
      {
        pageSize: 10,
        sort: {
          session: true,

          matiere: true,
          teacher: true,
          programm: false,
          matricule: true,
          student: false,
          level: true,
          status: true,
        },
        filters: {
          session: "select",

          matiere: true,
          teacher: true,
          programm: "select",
          matricule: true,
          student: true,
          level: "select",
          status: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: listChangeRequest,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-courses-teachers-1").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-courses-teachers-1"),
      {
        pageSize: 10,
        sort: {
          code: true,
          matiere: true,
          departement: true,
          programm: true,
          level: true,
          session: true,
          credit: false,
        },
        filters: {
          code: true,
          matiere: true,
          departement: "select",
          programm: "select",
          level: "select",
          credit: false,
          session: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: detailCoursesTeachers,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }
  /*
  if ($("#datatable-courses-teachers").length) {
    var datatable = new DataTable(document.querySelector("#datatable-courses-teachers"), {
      pageSize: 10,
      sort: {
        code: true,
        matiere: true,
        departement: true,
        programm: true,
        level: true,
        session: true,
        credit: false,    
      },
      filters: {
        code: true,
        matiere: true,
        departement: true,
        programm: true,
        level: true,
        session: true,
        credit: false, 
      },
      filterText: "Type to Filter... ",
      filterInputClass: "input",
      counterText: function (
        currentPage,
        totalPage,
        firstRow,
        lastRow,
        totalRow
      ) {
        return (
          "Showing " +
          firstRow +
          " to " +
          lastRow +
          " of " +
          totalRow +
          " items."
        );
      },
      counterDivSelector: ".datatable-info-2 span",
      pagingDivSelector: "#paging-first-datatable-2",
      firstPage: false,
      lastPage: false,
      nextPage: '<i class="fas fa-angle-right"></i>',
      prevPage: '<i class="fas fa-angle-left"></i>',
      afterRefresh: function () {
      },
      data: detailCoursesTeachersWithCurentSession,
    });

    setTimeout(function () {
     customizeDatatable("#datatable-courses-teachers-1 ");
    }, 1000);
  }*/

  if ($("#datatable-courses-student-notation").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-courses-student-notation"),
      {
        pageSize: 10,
        sort: {
          matiere: true,

          level: true,
          semester: true,
          session: true,
          ncour: false,
          ncomposition: false,
          moyenne: false,
          obs: true,
          link: false,
        },
        filters: {
          matiere: true,
          level: "select",
          semester: "select",
          session: "select",
          ncour: false,
          ncomposition: false,
          moyenne: false,
          obs: "select",
          link: false,
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: noteStudent,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-students-list-teacher").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-students-list-teacher"),
      {
        pageSize: 10,
        sort: {
          matricule: true,
          name: true,
          departement: true,
          programme: false,
          niveaux: true,
        },
        filters: {
          matricule: true,
          name: true,
          departement: "select",
          programme: "select",
          niveaux: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: listStudentTeacher,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-departement-programme").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-departement-programme"),
      {
        pageSize: 10,
        sort: {
          programme: true,
          name: true,
        },
        filters: {
          programme: "select",
          name: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: departementProgramme,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-user-action").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-user-action"),
      {
        pageSize: 10,
        sort: {
          matricule: true,
          name: true,
          programme: true,
          level: true,
          session: true,
          type: true,
          date: true,
        },
        filters: {
          matricule: true,
          name: true,
          programme: "select",
          level: "select",
          session: "select",
          type: "select",
          date: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: userAgentAction,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-student-request").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-student-request"),
      {
        pageSize: 10,
        sort: {
          matricule: true,
          name: true,
          reference: true,
          departement: true,
          programme: true,
          niveaux: true,
          status: true,
          title: false,
        },
        filters: {
          matricule: true,
          name: true,
          reference: true,
          departement: "select",
          programme: "select",
          niveaux: "select",
          status: "select",
          title: "select",
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",

        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {
          //initDropdowns();
        },
        data: listDocumentRequest,
      }
    );

    setTimeout(function () {
      //adjustDropdowns();

      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-students-list-note-de-service").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-students-list-note-de-service"),
      {
        pageSize: 10,
        sort: {
          name: true,
          departement: true,
          programme: true,
          matricule: true,
          dateBorn: false,
          placeBorn: false,
          father: false,
          mother: false,
          mc: false,
        },
        filters: {
          name: true,
          departement: "select",
          programme: "select",
          matricule: true,
          dateBorn: false,
          placeBorn: false,
          father: false,
          mother: false,
          mc: false,
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: dataNoteServices,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }

  if ($("#datatable-note-service").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-note-service"),
      {
        pageSize: 10,
        sort: {
          num: true,
          ref: true,
          date: true,
        },
        filters: {
          num: true,
          ref: true,
          date: true,
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: ListenoteServices,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }
  if ($("#datatable-timesheet").length) {
    var datatable = new DataTable(
      document.querySelector("#datatable-timesheet"),
      {
        pageSize: 10,
        sort: {
          faculty: true,
          department: true,
          programm: true,
          day: true,
          timing: true,
          classroom: true,
        },
        filters: {
          faculty: "select",
          department: "select",
          programm: "select",
          day: "select",
          timing: true,
          classroom: true,
        },
        filterText: "Type to Filter... ",
        filterInputClass: "input",
        counterText: function (
          currentPage,
          totalPage,
          firstRow,
          lastRow,
          totalRow
        ) {
          return (
            "Showing " +
            firstRow +
            " to " +
            lastRow +
            " of " +
            totalRow +
            " items."
          );
        },
        counterDivSelector: ".datatable-info span",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: false,
        lastPage: false,
        nextPage: '<i class="fas fa-angle-right"></i>',
        prevPage: '<i class="fas fa-angle-left"></i>',
        afterRefresh: function () {},
        data: dataTimesheets,
      }
    );

    setTimeout(function () {
      customizeDatatable();
    }, 1000);
  }
});
