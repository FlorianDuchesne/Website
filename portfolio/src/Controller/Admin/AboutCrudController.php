<?php

namespace App\Controller\Admin;

use App\Entity\About;
use App\Form\PictureType;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class AboutCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return About::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextEditorField::new('contenu'),
            TextField::new('aboutPicture')->setFormType(PictureType::class)->onlyOnForms(),
            ImageField::new('aboutPicture')->setBasePath('/files')->onlyOnIndex(),
        ];
    }
}
