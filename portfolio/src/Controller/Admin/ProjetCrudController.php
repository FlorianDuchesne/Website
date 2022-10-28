<?php

namespace App\Controller\Admin;

use App\Entity\Picture;
use App\Entity\Projet;
use App\Form\PictureType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ProjetCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Projet::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('intitule'),
            TextField::new('lienGit'),
            TextField::new('lienWeb'),
            TextEditorField::new('texte'),
            CollectionField::new('pictures')
            ->setEntryType(PictureType::class)
            ->onlyOnForms(),
            AssociationField::new('competences'),
        ];
    }
}
