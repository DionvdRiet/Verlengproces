var showBrand = [];
$(document).ready(function () {
    // id = "apple"
    // id = "samsung"
    // id = "huawei"
    

    // wat wil ik doen?: Bij een filter checked, ALLEEN DIE brand laten zien
    // wat als ik meerdere checks heb? eerst checken of er meerdere filters zijn aangevinkt
    // daarna kijken welke brands deze zijn en dan de brands ervan excluden in een forloopje ofso?
    $("#apple").change(function () {
        if (this.checked == true) {
            AddBrandToShowList("apple");
        }
        else if (this.checked == false) {
            DeleteBrandFromList(this.id.toString());
        }
        ShowPhones();
    });
    $("#huawei").change(function () {
        if (this.checked == true) {
            AddBrandToShowList("huawei");
        }
        else if (this.checked == false) {
            DeleteBrandFromList(this.id.toString());
        }
        ShowPhones();
    });
    $("#samsung").change(function () {
        if (this.checked == true) {
            AddBrandToShowList("samsung");
        }
        else if (this.checked == false) {
            DeleteBrandFromList(this.id.toString());
        }
        ShowPhones();
    });
    ShowPhones();
});

function DeleteBrandFromList(brandToDelete) {
    console.log("The following brand is going to be deleted: " + brandToDelete);
    var newBrandList = [];
    for (var i = 0; i < showBrand.length; i++) {
        if (showBrand[i] == brandToDelete)
            continue;
        newBrandList[newBrandList.length] = showBrand[i];
    }
    showBrand = newBrandList;
    console.log(showBrand);
}

function AddBrandToShowList(brandToAdd)
{
    console.log("The following brand is going to be added: " + brandToAdd);
    showBrand[showBrand.length] = brandToAdd;
    console.log(showBrand);
}

function ShowPhones()
{
    if (showBrand.length == 0) {
        $('#apple').show();
        $('#samsung').show();
        $('#huawei').show();
    }
    else {
        for (var i = 0; i < showBrand.length; i++) {
        }
    }
    console.log("Einde ShowPhones: " + showBrand);
}